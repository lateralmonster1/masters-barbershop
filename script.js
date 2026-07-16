const dialog = document.querySelector('#booking');
const serviceSelect = document.querySelector('#service');

document.querySelectorAll('.open-booking').forEach(button => {
  button.addEventListener('click', () => dialog.showModal());
});

document.querySelectorAll('.select-service').forEach(button => {
  button.addEventListener('click', () => {
    serviceSelect.value = button.dataset.service;
    dialog.showModal();
  });
});

document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  event.target.style.display = 'none';
  dialog.querySelector('.success').style.display = 'block';
  setTimeout(() => {
    dialog.close();
    event.target.reset();
    event.target.style.display = '';
    dialog.querySelector('.success').style.display = '';
  }, 2300);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
