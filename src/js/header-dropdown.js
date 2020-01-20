var notificationBtn = document.querySelector('.notification-btn');
var settingsBtn = document.querySelector('.settings-btn');
var sortBtn = document.querySelector('.sort-btn');
notificationBtn.addEventListener('click',function(e){
    openDropdown(e);
});

settingsBtn.addEventListener('click',function(e){
    openDropdown(e);
});

sortBtn.addEventListener('click',function(e){
    openDropdown(e)
});

function openDropdown(e){
    if(document.querySelector('.opened') != null && document.querySelector('.opened') === e.target.parentNode){
        document.querySelector('.opened').classList.remove("opened");
    }
    else if(document.querySelector('.opened') != null && document.querySelector('.opened') != e.target.parentNode){
        document.querySelector('.opened').classList.remove("opened");
        dropdownToggler(e);
    }
    else{
        dropdownToggler(e);
    }
}

function dropdownToggler(e){
    if(e.target.parentNode.classList.contains("settings-btn") || e.target.parentNode.classList.contains("notification-btn") || e.target.parentNode.classList.contains("list-header")){
        e.target.parentNode.classList.toggle("opened");
    }
    else{
        e.target.classList.toggle("opened");
    }
}