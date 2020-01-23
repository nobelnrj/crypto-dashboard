var count = document.querySelector('.count');
var output3 = '';
var finaloutput = '';
var xhttp3 = new XMLHttpRequest();
xhttp3.open("GET","https://gist.githubusercontent.com/nobelnrj/510a0570d69b1a152f4be2087774454b/raw/d5f6ab29597e10d4069f77336a428e940350c600/notification.json",true);
xhttp3.send();
xhttp3.onreadystatechange = notificationList;

function notificationList(){
    if(xhttp3.readyState == 4 && xhttp3.status == 200){
        var response = JSON.parse(xhttp3.responseText);
        console.log(response);
        createNotificationlist(response);
    }
}

function createNotificationlist(response){
    var count = document.querySelectorAll('.count');
    for(var i =0; i<count.length;i++){
        count[i].innerText = response.notification.length;
    }
    for(var j=0;j<response.notification.length;j++){
        var notificationItem = `<li>
                                    <svg><use href="${response.notification[j].icon}"></use></svg>
                                    <h6 class="notification-heading">${response.notification[j].heading}</h6>
                                    <p class="notification-content">${response.notification[j].content}</p>
                                    <p class="time-stamp">${response.notification[j].timestamp}</p>
                                </li>`;
        output3 += notificationItem;
    }
    document.querySelector('.dropdown>.dropdown-list').innerHTML = output3;
}

document.querySelector('.dropdown-footer').addEventListener('click',function(){
    document.querySelector('.dropdown-list').classList.add("read");
    var count = document.querySelectorAll('.count');
    for(var i =0; i<count.length;i++){
        count[i].innerText = '0';
    }
});