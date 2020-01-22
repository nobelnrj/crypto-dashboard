var toogleBtn = document.querySelector('.toggleBtn');
toogleBtn.addEventListener('click',function(){
   toogleBtn.classList.toggle("on");
   document.querySelector('body').classList.toggle('theme-dark');
});
