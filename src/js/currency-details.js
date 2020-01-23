var xhttp = new XMLHttpRequest();
var output1 = '';
var output2 = '';
let carouselList = document.querySelector('.carousel-list');
let listItem = document.querySelector('.list-items');
xhttp.open("GET","https://gist.githubusercontent.com/nobelnrj/6ea1331b6276b1783ce881f02c41130a/raw/ca194fc858d720a055f611f4b38504b01483adc3/currency-detail.json",true);
xhttp.send();
xhttp.onreadystatechange = currencyList;
function currencyList(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
        var response = JSON.parse(xhttp.responseText);
        createSlider(response);
        createList(response);
        document.querySelector('.sort-btn').addEventListener('click',function(){
            response.currency.sort(function(a, b) {
                return parseInt(a.value) - parseInt(b.value);
            });
        });
        carouselList.innerHTML += output1;
        listItem.innerHTML += output2;
        createCarousel(response);
    }
}

document.querySelector('.value-sort').addEventListener('click',sortbyValue);

document.querySelector('.status-sort').addEventListener('click',sortbyStatus);

function sortbyValue(){
    output2 = '';
    if(xhttp.readyState == 4 && xhttp.status == 200){
        var response = JSON.parse(xhttp.responseText);
        response.currency.sort(function(a, b) {
            return parseInt(b.value) - parseInt(a.value);
        });
        createList(response);
        listItem.innerHTML = '';
        listItem.innerHTML += output2;
        createCarousel(response);
    }
    document.querySelector('.opened').classList.remove("opened");
}

function sortbyStatus(){
    output2 = '';
    if(xhttp.readyState == 4 && xhttp.status == 200){
        var response = JSON.parse(xhttp.responseText);
        response.currency.sort(function(a, b) {
            return parseInt(b.percentage) - parseInt(a.percentage);
        });
        createList(response);
        listItem.innerHTML = '';
        listItem.innerHTML += output2;
        createCarousel(response);
    }
    document.querySelector('.opened').classList.remove("opened");
}

function createSlider(response){
    for(var i=0;i<response.currency.length;i++){
        var li = `<li class="carousel-item">
                    <div class="currency-details">
                        <div class="currency-symbol">
                            <svg>
                                <use href="${response.currency[i].icon}"></use>
                            </svg>
                        </div>
                        <div class="currency-detail">
                            <abbr class="currency-abbr">${response.currency[i].abbr}</abbr>
                            <span class="currency-name">${response.currency[i].name}</span>
                        </div>
                        <div class="currency-data">
                            <b class="currency-value">&#165; ${response.currency[i].value}</b>
                            <span class="currency-status ${response.currency[i].status}">${response.currency[i].percentage}&#37; <svg><use href="#point-down"></use></svg></span>
                        </div>
                    </div>
                    <div id="preview-chart-${i+1}" class="chart"></div>
                    </li>`;
        output1 += li;
        carouselList.classList.remove('loading');
    }
}
function createList(response){
    for(var i=0;i<response.currency.length;i++){
        var currencydetailList = `
                    <li class="currency-details">
                        <div class="currency-symbol">
                            <svg>
                                <use href="${response.currency[i].icon}"></use>
                            </svg>
                        </div>
                        <div class="currency-detail">
                            <abbr class="currency-abbr">${response.currency[i].abbr}</abbr>
                        </div>
                        <div class="currency-data">
                            <b class="currency-value">&#165; ${response.currency[i].value}</b>
                            <span class="currency-status ${response.currency[i].status}">${response.currency[i].percentage}&#37; <svg><use href="#point-down"></use></svg></span>
                        </div>
                    </li>`
        output2 += currencydetailList;
        listItem.classList.remove('loading');
    }
}