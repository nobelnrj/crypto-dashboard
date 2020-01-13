var searchBox = document.querySelector('.search-box');
var clearBtn = document.querySelector('.clear-btn');
searchBox.addEventListener('input',function(){
    if(searchBox.value != ''){
        clearBtn.style.display = "block";
    }
    else{
        clearBtn.style.display = "none";
    }
});
clearBtn.addEventListener('click',function(){
    searchBox.value = '';
    clearBtn.style.display = "none";
});