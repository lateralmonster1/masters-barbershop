const dialog=document.querySelector('#booking');const serviceSelect=document.querySelector('#service');const barberSelect=document.querySelector('#barber');
document.querySelectorAll('.open-booking').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
document.querySelectorAll('.select-service').forEach(button=>button.addEventListener('click',()=>{serviceSelect.value=button.dataset.service;dialog.showModal()}));
document.querySelectorAll('.choose-barber').forEach(button=>button.addEventListener('click',()=>{barberSelect.value=button.dataset.barber;dialog.showModal()}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
const dateInput=document.querySelector('input[type="date"]');dateInput.min=new Date().toISOString().slice(0,10);
document.querySelector('#booking-form').addEventListener('submit',event=>{event.preventDefault();event.target.style.display='none';dialog.querySelector('.success').style.display='block';setTimeout(()=>{dialog.close();event.target.reset();event.target.style.display='';dialog.querySelector('.success').style.display=''},2300)});
