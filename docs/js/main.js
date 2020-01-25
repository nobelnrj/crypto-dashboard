"use strict";function createCarousel(e){var r=e.currency.length,a=document.querySelector(".carousel-container"),c=document.querySelector(".carousel-list"),s=document.querySelector(".right-btn"),o=document.querySelector(".left-btn");s.addEventListener("click",function(){var e=document.querySelector(".carousel-item").offsetWidth,t=window.getComputedStyle(c),n=new WebKitCSSMatrix(t.webkitTransform).m41;-250*(r-4)<n&&(c.style.transform="translateX(".concat(n-e-27,"px)"),o.classList.add("active")),n<-250*(r-5)&&s.classList.remove("active"),a.classList.contains("list-view")&&(c.style.transform="translateX(".concat(0,"px)")),o.classList.add("active")}),o.addEventListener("click",function(){var e=document.querySelector(".carousel-item").offsetWidth,t=window.getComputedStyle(c),n=new WebKitCSSMatrix(t.webkitTransform).m41;n<0&&(c.style.transform="translateX(".concat(n+e+27,"px)"),s.classList.add("active")),-280<n&&o.classList.remove("active"),a.classList.contains("list-view")&&(c.style.transform="translateX(".concat(0,"px)"))})}document.addEventListener("touchstart",{passive:!0});for(var tabs=document.querySelectorAll(".tabs"),_loop=function(n){tabs[n].addEventListener("click",function(e){var t=document.querySelector(".expanded");null!=t?tabs[n]===t?tabs[n].classList.toggle("expanded"):(t.classList.remove("expanded"),tabs[n].classList.add("expanded")):tabs[n].classList.toggle("expanded")})},_i=0;_i<tabs.length;_i++)_loop(_i);var xhttp=new XMLHttpRequest,output1="",output2="",carouselList=document.querySelector(".carousel-list"),listItem=document.querySelector(".list-items");function currencyList(){if(4==xhttp.readyState&&200==xhttp.status){var e=JSON.parse(xhttp.responseText);createSlider(e),createList(e),document.querySelector(".sort-btn").addEventListener("click",function(){e.currency.sort(function(e,t){return parseInt(e.value)-parseInt(t.value)})}),carouselList.innerHTML+=output1,listItem.innerHTML+=output2,previewChart(),createCarousel(e)}}function sortbyValue(){if(output2="",4==xhttp.readyState&&200==xhttp.status){var e=JSON.parse(xhttp.responseText);e.currency.sort(function(e,t){return parseInt(t.value)-parseInt(e.value)}),createList(e),listItem.innerHTML="",listItem.innerHTML+=output2,createCarousel(e)}document.querySelector(".opened").classList.remove("opened")}function sortbyStatus(){if(output2="",4==xhttp.readyState&&200==xhttp.status){var e=JSON.parse(xhttp.responseText);e.currency.sort(function(e,t){return parseInt(t.percentage)-parseInt(e.percentage)}),createList(e),listItem.innerHTML="",listItem.innerHTML+=output2,createCarousel(e)}document.querySelector(".opened").classList.remove("opened")}function createSlider(e){for(var t=0;t<e.currency.length;t++){var n='<li class="carousel-item">\n                    <div class="currency-details">\n                        <div class="currency-symbol">\n                            <svg>\n                                <use href="'.concat(e.currency[t].icon,'"></use>\n                            </svg>\n                        </div>\n                        <div class="currency-detail">\n                            <abbr class="currency-abbr">').concat(e.currency[t].abbr,'</abbr>\n                            <span class="currency-name">').concat(e.currency[t].name,'</span>\n                        </div>\n                        <div class="currency-data">\n                            <b class="currency-value">&#165; ').concat(e.currency[t].value,'</b>\n                            <span class="currency-status ').concat(e.currency[t].status,'">').concat(e.currency[t].percentage,'&#37; <svg><use href="#point-down"></use></svg></span>\n                        </div>\n                    </div>\n                    <div id="preview-chart-').concat(t+1,'" class="chart"></div>\n                    </li>');output1+=n,carouselList.classList.remove("loading")}}function createList(e){for(var t=0;t<e.currency.length;t++){var n='\n                    <li class="currency-details">\n                        <div class="currency-symbol">\n                            <svg>\n                                <use href="'.concat(e.currency[t].icon,'"></use>\n                            </svg>\n                        </div>\n                        <div class="currency-detail">\n                            <abbr class="currency-abbr">').concat(e.currency[t].abbr,'</abbr>\n                        </div>\n                        <div class="currency-data">\n                            <b class="currency-value">&#165; ').concat(e.currency[t].value,'</b>\n                            <span class="currency-status ').concat(e.currency[t].status,'">').concat(e.currency[t].percentage,'&#37; <svg><use href="#point-down"></use></svg></span>\n                        </div>\n                    </li>');output2+=n,listItem.classList.remove("loading")}}xhttp.open("GET","https://gist.githubusercontent.com/nobelnrj/6ea1331b6276b1783ce881f02c41130a/raw/ca194fc858d720a055f611f4b38504b01483adc3/currency-detail.json",!0),xhttp.send(),xhttp.onreadystatechange=currencyList,document.querySelector(".value-sort").addEventListener("click",sortbyValue),document.querySelector(".status-sort").addEventListener("click",sortbyStatus);var toogleBtn=document.querySelector(".toggleBtn");toogleBtn.addEventListener("click",function(){toogleBtn.classList.toggle("on"),document.querySelector("body").classList.toggle("theme-dark"),toogleBtn.classList.contains("on")?document.cookie="darkMode = true":document.cookie="darkMode = false"});var notificationBtn=document.querySelector(".notification-btn"),settingsBtn=document.querySelector(".settings-btn"),sortBtn=document.querySelector(".sort-btn"),dropDown=document.querySelectorAll(".dropdown>*");function openDropdown(e){var t=document.querySelector(".opened");null!=t&&t===e.target.parentNode?t.classList.remove("opened"):(null!=t&&t!=e.target.parentNode&&t.classList.remove("opened"),dropdownToggler(e))}function dropdownToggler(e){e.target.parentNode.classList.contains("settings-btn")||e.target.parentNode.classList.contains("notification-btn")||e.target.parentNode.classList.contains("list-header")?e.target.parentNode.classList.toggle("opened"):e.target.classList.toggle("opened")}notificationBtn.addEventListener("click",function(e){openDropdown(e)}),settingsBtn.addEventListener("click",function(e){openDropdown(e)}),sortBtn.addEventListener("click",function(e){openDropdown(e)});for(var i=0;i<dropDown.length;i++)dropDown[i].addEventListener("click",function(e){e.stopPropagation()});for(var expandBtn=document.querySelectorAll(".expand-btn"),_loop2=function(e){expandBtn[e].addEventListener("click",function(){expandBtn[e].parentNode.parentNode.classList.toggle("small-section")})},_i2=0;_i2<expandBtn.length;_i2++)_loop2(_i2);document.querySelector(".list-view").addEventListener("click",function(){document.querySelector(".carousel-container").classList.toggle("list-view"),document.querySelector(".carousel-list").style.transform="translateX(".concat(0,"px)")});var menuBtn=document.querySelector(".menu-btn"),sidebar=document.querySelector(".sidebar"),mainContainer=document.querySelector(".main-container"),leftMenu=document.querySelector(".left-menu");menuBtn.addEventListener("click",function(){sidebar.classList.toggle("sidebar-small"),mainContainer.classList.toggle("sidebar-small"),leftMenu.classList.toggle("sidebar-small")});var count=document.querySelector(".count"),output3="",finaloutput="",xhttp3=new XMLHttpRequest;function notificationList(){4==xhttp3.readyState&&200==xhttp3.status&&createNotificationlist(JSON.parse(xhttp3.responseText))}function createNotificationlist(e){for(var t=document.querySelectorAll(".count"),n=0;n<t.length;n++)t[n].innerText=e.notification.length;for(var r=0;r<e.notification.length;r++){var a='<li>\n                                    <svg><use href="'.concat(e.notification[r].icon,'"></use></svg>\n                                    <h6 class="notification-heading">').concat(e.notification[r].heading,'</h6>\n                                    <p class="notification-content">').concat(e.notification[r].content,'</p>\n                                    <p class="time-stamp">').concat(e.notification[r].timestamp,"</p>\n                                </li>");output3+=a}document.querySelector(".dropdown>.dropdown-list").innerHTML=output3}function previewChart(){Highcharts.getJSON("https://gist.githubusercontent.com/nobelnrj/c1aec1dec6ded56496a4af7732a75cd2/raw/4a3817c871fcd461edc03715ae963e7bbc27bbc8/previewdata.json",function(e){var t={chart:{type:"areaspline",width:230,height:90},title:{text:""},subtitle:{text:""},credits:{enabled:!1},tooltip:{enabled:!1},xAxis:{visible:!1},yAxis:{visible:!1},legend:{enabled:!1},plotOptions:{areaspline:{fillColor:{linearGradient:{x1:0,y1:-1,x2:0,y2:.5},stops:[[0,"#ffc246"],[1,"#ffffff"]]},marker:{enabled:!1},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null}},series:[{name:"USD to EUR",data:e,marker:{enabled:!1}}]};Highcharts.chart("preview-chart-1",t),Highcharts.chart("preview-chart-2",t),Highcharts.chart("preview-chart-3",t),Highcharts.chart("preview-chart-4",t),Highcharts.chart("preview-chart-5",t),Highcharts.chart("preview-chart-6",t),Highcharts.chart("preview-chart-7",t),Highcharts.chart("preview-chart-8",t),Highcharts.chart("preview-chart-9",t),Highcharts.charts[0].series[0].update({fillColor:{stops:[[0,"#ffc246"],[1,"#ffffff"]]}}),Highcharts.charts[1].series[0].update({fillColor:{stops:[[0,"#5470de"],[1,"#ffffff"]]}}),Highcharts.charts[2].series[0].update({fillColor:{stops:[[0,"#07beaa"],[1,"#ffffff"]]}}),Highcharts.charts[3].series[0].update({fillColor:{stops:[[0,"#0d99e6"],[1,"#ffffff"]]}}),Highcharts.charts[4].series[0].update({fillColor:{stops:[[0,"#ffc246"],[1,"#ffffff"]]}}),Highcharts.charts[5].series[0].update({fillColor:{stops:[[0,"#5470de"],[1,"#ffffff"]]}}),Highcharts.charts[6].series[0].update({fillColor:{stops:[[0,"#07beaa"],[1,"#ffffff"]]}}),Highcharts.charts[3].series[0].update({fillColor:{stops:[[0,"#0d99e6"],[1,"#ffffff"]]}})})}xhttp3.open("GET","https://gist.githubusercontent.com/nobelnrj/510a0570d69b1a152f4be2087774454b/raw/d5f6ab29597e10d4069f77336a428e940350c600/notification.json",!0),xhttp3.send(),xhttp3.onreadystatechange=notificationList,document.querySelector(".dropdown-footer").addEventListener("click",function(){document.querySelector(".dropdown-list").classList.add("read");for(var e=document.querySelectorAll(".count"),t=0;t<e.length;t++)e[t].innerText="0"});var searchBox=document.querySelector(".search-box"),clearBtn=document.querySelector(".clear-btn");searchBox.addEventListener("input",function(){""!=searchBox.value?clearBtn.style.display="block":clearBtn.style.display="none"}),clearBtn.addEventListener("click",function(){searchBox.value="",clearBtn.style.display="none"}),window.onload=function(){Highcharts.getJSON("https://gist.githubusercontent.com/nobelnrj/ae4b2b7cc2be5364ce13007442819421/raw/83c383be2846fabbbc8d5dda988232cb1d11ab3e/livestockvalue.json",function(e){for(var t=[],n=[],r=[],a=e.length,c=0,s=a-10;c<a;c+=1)t.push([e[c][0],e[c][1],e[c][2],e[c][3],e[c][4]]),n.push([e[c][0],e[c][5]]);for(;s<a;s+=1)r.push([e[s][0],e[s][4]]);Highcharts.stockChart("container",{navigator:{enabled:!1},rangeSelector:{selected:1},chart:{width:740,height:450},yAxis:[{labels:{align:"left"},height:"80%",resize:{enabled:!0}},{labels:{align:"left"},top:"80%",height:"20%",offset:0}],stockTools:{gui:{enabled:!1}},series:[{type:"candlestick",id:"aapl-ohlc",name:"BTC",data:t},{type:"column",id:"aapl-volume",name:"BTC",data:n,yAxis:1}],responsive:{rules:[{condition:{maxWidth:800},chartOptions:{rangeSelector:{inputEnabled:!1}}}]}})})};