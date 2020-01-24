window.onload = function(){
    Highcharts.getJSON('https://gist.githubusercontent.com/nobelnrj/ae4b2b7cc2be5364ce13007442819421/raw/83c383be2846fabbbc8d5dda988232cb1d11ab3e/livestockvalue.json', function (data) {
        // split the data set into ohlc and volume
        var ohlc = [],
            volume = [],
            preview = [],
            dataLength = data.length,
            i = 0,
            j = dataLength-10;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i][0], // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);

            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }

        for (j; j<dataLength;j += 1){
            preview.push([
                data[j][0],
                data[j][4]
            ]);      
        }
        
        Highcharts.stockChart('container', {
            navigator: {
                enabled: false
            },
            rangeSelector: {
                selected: 1
            },
            chart: {
                width: 740,
                height: 450
            },
            yAxis: [{
                labels: {
                    align: 'left'
                },
                height: '80%',
                resize: {
                    enabled: true
                }
            }, {
                labels: {
                    align: 'left'
                },
                top: '80%',
                height: '20%',
                offset: 0
            }],
            stockTools: {
                gui: {
                    enabled: false
                }
            },
            series: [{
                type: 'candlestick',
                id: 'aapl-ohlc',
                name: 'BTC',
                data: ohlc
            }, {
                type: 'column',
                id: 'aapl-volume',
                name: 'BTC',
                data: volume,
                yAxis: 1
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                    chartOptions: {
                        rangeSelector: {
                            inputEnabled: false
                        }
                    }
                }]
            }
        });
    });
}