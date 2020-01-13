"use strict";function createCarousel(e){var s=e.currency.length,a=document.querySelector(".carousel-container"),r=document.querySelector(".carousel-list"),c=document.querySelector(".right-btn"),n=document.querySelector(".left-btn");c.addEventListener("click",function(){var e=document.querySelector(".carousel-item").offsetWidth,t=document.querySelector(".carousel-list").offsetLeft;-250*(s-4)<t&&(r.style.left="".concat(t-e-27,"px"),n.classList.add("active")),t<-250*(s-5)&&c.classList.remove("active"),a.classList.contains("list-view")&&(r.style.left="0px"),n.classList.add("active")}),n.addEventListener("click",function(){var e=document.querySelector(".carousel-item").offsetWidth,t=document.querySelector(".carousel-list").offsetLeft;t<0&&(r.style.left="".concat(t+e+27,"px"),c.classList.add("active")),-280<t&&n.classList.remove("active"),a.classList.contains("list-view")&&(r.style.left="0px")})}for(var tabs=document.querySelectorAll(".tabs"),_loop=function(s){tabs[s].addEventListener("click",function(e){var t=document.querySelector(".expanded");null!=t?tabs[s]===t?tabs[s].classList.toggle("expanded"):(t.classList.remove("expanded"),tabs[s].classList.add("expanded")):tabs[s].classList.toggle("expanded")})},i=0;i<tabs.length;i++)_loop(i);var xhttp=new XMLHttpRequest;function currencyList(){if(4==xhttp.readyState&&200==xhttp.status){for(var e=JSON.parse(xhttp.responseText),t="",s="",a=0;a<e.currency.length;a++){t+='<li class="carousel-item">\n                        <div class="currency-details">\n                            <div class="currency-symbol">\n                                <svg>\n                                    <use href="'.concat(e.currency[a].icon,'"></use>\n                                </svg>\n                            </div>\n                            <div class="currency-detail">\n                                <abbr class="currency-abbr">').concat(e.currency[a].abbr,'</abbr>\n                                <span class="currency-name">').concat(e.currency[a].name,'</span>\n                            </div>\n                            <div class="currency-data">\n                                <b class="currency-value">&#165; ').concat(e.currency[a].value,'</b>\n                                <span class="currency-status ').concat(e.currency[a].status,'">').concat(e.currency[a].percentage,' <svg><use href="./sprite/symbol/sprite.svg#point-down"></use></svg></span>\n                            </div>\n                        </div>\n                        <div id="preview-chart-').concat(a+1,'" class="chart"></div>\n                       </li>'),s+='\n                        <li class="currency-details">\n                            <div class="currency-symbol">\n                                <svg>\n                                    <use href="'.concat(e.currency[a].icon,'"></use>\n                                </svg>\n                            </div>\n                            <div class="currency-detail">\n                                <abbr class="currency-abbr">').concat(e.currency[a].abbr,'</abbr>\n                            </div>\n                            <div class="currency-data">\n                                <b class="currency-value">&#165; ').concat(e.currency[a].value,'</b>\n                                <span class="currency-status ').concat(e.currency[a].status,'">').concat(e.currency[a].percentage,' <svg><use href="./sprite/symbol/sprite.svg#point-down"></use></svg></span>\n                            </div>\n                        </li>'),document.querySelector(".carousel-list").classList.remove("loading"),document.querySelector(".list-items").classList.remove("loading")}document.querySelector(".carousel-list").innerHTML+=t,document.querySelector(".list-items").innerHTML+=s,createCarousel(e)}}xhttp.open("GET","../json/currency-details.json",!0),document.querySelector(".carousel-list").classList.add("loading"),document.querySelector(".list-items").classList.add("loading"),xhttp.send(),xhttp.onreadystatechange=currencyList;for(var expandBtn=document.querySelectorAll(".expand-btn"),_loop2=function(e){expandBtn[e].addEventListener("click",function(){expandBtn[e].parentNode.parentNode.classList.toggle("small-section")})},_i=0;_i<expandBtn.length;_i++)_loop2(_i);document.querySelector(".list-view").addEventListener("click",function(){document.querySelector(".carousel-container").classList.toggle("list-view"),document.querySelector(".carousel-list").style.left="0px"});var menuBtn=document.querySelector(".menu-btn"),sidebar=document.querySelector(".sidebar"),mainContainer=document.querySelector(".main-container"),leftMenu=document.querySelector(".left-menu");menuBtn.addEventListener("click",function(){sidebar.classList.toggle("sidebar-small"),mainContainer.classList.toggle("sidebar-small"),leftMenu.classList.toggle("sidebar-small")}),Highcharts.getJSON("../json/data2.json",function(e){var t={chart:{type:"areaspline",width:230,height:90},title:{text:""},subtitle:{text:""},credits:{enabled:!1},tooltip:{enabled:!1},xAxis:{visible:!1},yAxis:{visible:!1},legend:{enabled:!1},plotOptions:{areaspline:{fillColor:{linearGradient:{x1:0,y1:-1,x2:0,y2:.5},stops:[[0,"#ffc246"],[1,"#ffffff"]]},marker:{enabled:!1},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null}},series:[{name:"USD to EUR",data:e,marker:{enabled:!1}}]};Highcharts.chart("preview-chart-1",t),Highcharts.chart("preview-chart-2",t),Highcharts.chart("preview-chart-3",t),Highcharts.chart("preview-chart-4",t),Highcharts.chart("preview-chart-5",t),Highcharts.chart("preview-chart-6",t),Highcharts.chart("preview-chart-7",t),Highcharts.chart("preview-chart-8",t),Highcharts.chart("preview-chart-9",t),Highcharts.charts[0].series[0].update({fillColor:{stops:[[0,"#ffc246"],[1,"#ffffff"]]}}),Highcharts.charts[1].series[0].update({fillColor:{stops:[[0,"#5470de"],[1,"#ffffff"]]}}),Highcharts.charts[2].series[0].update({fillColor:{stops:[[0,"#07beaa"],[1,"#ffffff"]]}}),Highcharts.charts[3].series[0].update({fillColor:{stops:[[0,"#0d99e6"],[1,"#ffffff"]]}}),Highcharts.charts[4].series[0].update({fillColor:{stops:[[0,"#ffc246"],[1,"#ffffff"]]}}),Highcharts.charts[5].series[0].update({fillColor:{stops:[[0,"#5470de"],[1,"#ffffff"]]}}),Highcharts.charts[6].series[0].update({fillColor:{stops:[[0,"#07beaa"],[1,"#ffffff"]]}}),Highcharts.charts[3].series[0].update({fillColor:{stops:[[0,"#0d99e6"],[1,"#ffffff"]]}})});var searchBox=document.querySelector(".search-box"),clearBtn=document.querySelector(".clear-btn");searchBox.addEventListener("input",function(){""!=searchBox.value?clearBtn.style.display="block":clearBtn.style.display="none"}),clearBtn.addEventListener("click",function(){searchBox.value="",clearBtn.style.display="none"}),Highcharts.getJSON("../json/data.json",function(e){for(var t=[],s=[],a=[],r=e.length,c=0,n=r-10;c<r;c+=1)t.push([e[c][0],e[c][1],e[c][2],e[c][3],e[c][4]]),s.push([e[c][0],e[c][5]]);for(;n<r;n+=1)a.push([e[n][0],e[n][4]]);Highcharts.stockChart("container",{navigator:{enabled:!1},rangeSelector:{selected:1},chart:{width:740,height:450},yAxis:[{labels:{align:"left"},height:"80%",resize:{enabled:!0}},{labels:{align:"left"},top:"80%",height:"20%",offset:0}],stockTools:{gui:{enabled:!1}},series:[{type:"candlestick",id:"aapl-ohlc",name:"BTC",data:t},{type:"column",id:"aapl-volume",name:"BTC",data:s,yAxis:1}],responsive:{rules:[{condition:{maxWidth:800},chartOptions:{rangeSelector:{inputEnabled:!1}}}]}})}),Highcharts.getJSON("https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json",function(e){Highcharts.chart("preview",{chart:{zoomType:"x"},title:{text:"USD to EUR exchange rate over time"},subtitle:{text:void 0===document.ontouchstart?"Click and drag in the plot area to zoom in":"Pinch the chart to zoom in"},xAxis:{type:"datetime"},yAxis:{title:{text:"Exchange rate"}},legend:{enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,Highcharts.getOptions().colors[0]],[1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null}},series:[{type:"area",name:"USD to EUR",data:e}]})});