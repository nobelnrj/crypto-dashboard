var xhttp = new XMLHttpRequest();
var output1 = '';
var output2 = '';
xhttp.open("GET","../json/currency-details.json",true);
document.querySelector('.carousel-list').classList.add('loading');
document.querySelector('.list-items').classList.add('loading');
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
        document.querySelector('.carousel-list').innerHTML += output1;
        document.querySelector('.list-items').innerHTML += output2;
        createCarousel(response);
    }
}

document.querySelector('.value-sort').addEventListener('click',function(){
    output2 = '';
    if(xhttp.readyState == 4 && xhttp.status == 200){
        var response = JSON.parse(xhttp.responseText);
        response.currency.sort(function(a, b) {
            return parseInt(b.value) - parseInt(a.value);
        });
        createList(response);
        document.querySelector('.list-items').innerHTML = '';
        document.querySelector('.list-items').innerHTML += output2;
        createCarousel(response);
    }
    document.querySelector('.opened').classList.remove("opened");
});

document.querySelector('.status-sort').addEventListener('click',function(){
    output2 = '';
    if(xhttp.readyState == 4 && xhttp.status == 200){
        var response = JSON.parse(xhttp.responseText);
        response.currency.sort(function(a, b) {
            return parseInt(b.percentage) - parseInt(a.percentage);
        });
        createList(response);
        document.querySelector('.list-items').innerHTML = '';
        document.querySelector('.list-items').innerHTML += output2;
        createCarousel(response);
    }
    document.querySelector('.opened').classList.remove("opened");
});

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
                            <span class="currency-status ${response.currency[i].status}">${response.currency[i].percentage}&#37; <svg><use href="./sprite/symbol/sprite.svg#point-down"></use></svg></span>
                        </div>
                    </div>
                    <div id="preview-chart-${i+1}" class="chart"></div>
                    </li>`;
        output1 += li;
        document.querySelector('.carousel-list').classList.remove('loading');
    }
}
function createList(response){
    for(var i=0;i<response.currency.length;i++){
        var currencyList = `
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
                            <span class="currency-status ${response.currency[i].status}">${response.currency[i].percentage}&#37; <svg><use href="./sprite/symbol/sprite.svg#point-down"></use></svg></span>
                        </div>
                    </li>`
        output2 += currencyList;
        document.querySelector('.list-items').classList.remove('loading');
    }
}