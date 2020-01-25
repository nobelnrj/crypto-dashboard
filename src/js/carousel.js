function createCarousel(response){
    var totalItems = response.currency.length;
    var carouselContainer = document.querySelector('.carousel-container');
    var currencyContainer = document.querySelector('.carousel-list');
    var rightBtn = document.querySelector('.right-btn');
    var leftBtn = document.querySelector('.left-btn');
    rightBtn.addEventListener('click',function(){
        var width = document.querySelector('.carousel-item').offsetWidth;
        var style = window.getComputedStyle(currencyContainer);
        var matrix = new WebKitCSSMatrix(style.webkitTransform);
        var left = matrix.m41;
        if(left > -((totalItems-4)*250)){
            currencyContainer.style.transform = `translateX(${left-width-27}px)`;
            leftBtn.classList.add('active');
        }
        if(left < -((totalItems-5)*250)){
            rightBtn.classList.remove('active');
        }
        if(carouselContainer.classList.contains("list-view")){
            currencyContainer.style.transform = `translateX(${0}px)`;
        }
        leftBtn.classList.add('active');
    });
    leftBtn.addEventListener('click',function(){
        var width = document.querySelector('.carousel-item').offsetWidth;
        var style = window.getComputedStyle(currencyContainer);
        var matrix = new WebKitCSSMatrix(style.webkitTransform);
        var left = matrix.m41;
        if(left < 0){
            currencyContainer.style.transform = `translateX(${left+width+27}px)`;
            rightBtn.classList.add('active');
        }
        if(left > -280){
            leftBtn.classList.remove('active');
        }
        if(carouselContainer.classList.contains("list-view")){
            currencyContainer.style.transform = `translateX(${0}px)`;
        }
    });
}

document.addEventListener('touchstart',  {passive: true});