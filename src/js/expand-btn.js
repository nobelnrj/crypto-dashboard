var expandBtn = document.querySelectorAll('.expand-btn');
for(let i=0;i<expandBtn.length;i++){
    expandBtn[i].addEventListener('click',function(){
        expandBtn[i].parentNode.parentNode.classList.toggle('small-section');
    });
}