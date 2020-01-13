var tabs = document.querySelectorAll('.tabs');
for(let i =0 ; i<tabs.length;i++){
    tabs[i].addEventListener('click',function(e){
        var openedDropdown = document.querySelector('.expanded');
        if(openedDropdown != null){
            if(tabs[i] === openedDropdown){
                tabs[i].classList.toggle('expanded');
            }
            else{
                openedDropdown.classList.remove('expanded');
                tabs[i].classList.add('expanded');
            }
        }
        else{
            tabs[i].classList.toggle('expanded');
        }
    });
}