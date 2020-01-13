var menuBtn = document.querySelector('.menu-btn');
var sidebar = document.querySelector('.sidebar');
var mainContainer = document.querySelector('.main-container');
var leftMenu = document.querySelector('.left-menu');
menuBtn.addEventListener('click',function(){
    sidebar.classList.toggle('sidebar-small');
    mainContainer.classList.toggle('sidebar-small');
    leftMenu.classList.toggle('sidebar-small');
});