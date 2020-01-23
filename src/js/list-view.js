document.querySelector('.list-view').addEventListener('click',function(){
    document.querySelector('.carousel-container').classList.toggle('list-view');
    document.querySelector('.carousel-list').style.transform = `translateX(${0}px)`;
});