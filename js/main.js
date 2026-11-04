document.getElementById('year').textContent=new Date().getFullYear();
const ham=document.getElementById('hamburger');const nav=document.getElementById('nav');
ham.addEventListener('click',()=>nav.classList.toggle('open'));
document.getElementById('bookingForm').addEventListener('submit',function(e){
 e.preventDefault();
 const name=document.getElementById('name').value.trim();
 const phone=document.getElementById('phone').value.trim();
 const appliance=document.getElementById('appliance').value;
 const city=document.getElementById('city').value;
 const problem=document.getElementById('problem').value.trim();
 const msg=`Hi AZ Appliance Services,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AAppliance: ${encodeURIComponent(appliance)}%0ACity: ${encodeURIComponent(city)}%0AProblem: ${encodeURIComponent(problem)}%0A%0APlease confirm same-day availability.`;
 window.open(`https://wa.me/16476254669?text=${msg}`,'_blank');
});
