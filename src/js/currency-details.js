var xhttp = new XMLHttpRequest();
xhttp.open("GET","../json/currency-details.json",true);
document.querySelector('.carousel-list').classList.add('loading');
document.querySelector('.list-items').classList.add('loading');
xhttp.send();
xhttp.onreadystatechange = currencyList;
function currencyList(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
        var response = JSON.parse(xhttp.responseText);
        var output1 = '';
        var output2 = '';
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
                                <span class="currency-status ${response.currency[i].status}">${response.currency[i].percentage} <svg><use href="./sprite/symbol/sprite.svg#point-down"></use></svg></span>
                            </div>
                        </div>
                        <div id="preview-chart-${i+1}" class="chart"></div>
                       </li>`;
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
                                <span class="currency-status ${response.currency[i].status}">${response.currency[i].percentage} <svg><use href="./sprite/symbol/sprite.svg#point-down"></use></svg></span>
                            </div>
                        </li>`
            output1 += li;
            output2 += currencyList;
            document.querySelector('.carousel-list').classList.remove('loading');
            document.querySelector('.list-items').classList.remove('loading');
        }
        document.querySelector('.carousel-list').innerHTML += output1;
        document.querySelector('.list-items').innerHTML += output2;
        createCarousel(response);
    }
}