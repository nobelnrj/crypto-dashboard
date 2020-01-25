var toogleBtn = document.querySelector('.toggleBtn');
toogleBtn.addEventListener('click',function(){
   toogleBtn.classList.toggle("on");
   document.querySelector('body').classList.toggle('theme-dark');
   if(toogleBtn.classList.contains("on")){
      document.cookie = "darkMode = true";
   }
   else{
      document.cookie = "darkMode = false";
   }
});