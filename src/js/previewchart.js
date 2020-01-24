function previewChart(){
    Highcharts.getJSON(
        'https://gist.githubusercontent.com/nobelnrj/c1aec1dec6ded56496a4af7732a75cd2/raw/4a3817c871fcd461edc03715ae963e7bbc27bbc8/previewdata.json',
        function (data) {
            var options = 
            {
                chart: {
                    type: 'areaspline',
                    width: 230,
                    height: 90
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                credits:{
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                xAxis: {
                    visible: false
                },
                yAxis: {
                    visible: false
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    areaspline: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: -1,
                                x2: 0,
                                y2: 0.5
                            },
                            stops: [
                                [0, '#ffc246'],
                                [1, '#ffffff']
                            ]
                        },
                        marker: {
                            enabled: false
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 2
                            }
                        },
                        threshold: null
                    }
                },
    
                series: [{
                    name: 'USD to EUR',
                    data: data,
                    marker: {
                        enabled: false
                    }
                }]
            };
            Highcharts.chart('preview-chart-1', options);
            Highcharts.chart('preview-chart-2', options);
            Highcharts.chart('preview-chart-3', options);
            Highcharts.chart('preview-chart-4', options);
            Highcharts.chart('preview-chart-5', options);
            Highcharts.chart('preview-chart-6', options);
            Highcharts.chart('preview-chart-7', options);
            Highcharts.chart('preview-chart-8', options);
            Highcharts.chart('preview-chart-9', options);
            Highcharts.charts[0].series[0].update({
                fillColor: {
                    stops: [
                        [0, '#ffc246'],
                        [1, '#ffffff']
                    ]
                }
            });
            Highcharts.charts[1].series[0].update({
                fillColor: {
                    stops: [
                        [0, '#5470de'],
                        [1, '#ffffff']
                    ]
                }
            });
            Highcharts.charts[2].series[0].update({
                fillColor: {
                    stops: [
                        [0, '#07beaa'],
                        [1, '#ffffff']
                    ]
                }
            });
            Highcharts.charts[3].series[0].update({
                fillColor: {
                    stops: [
                        [0, '#0d99e6'],
                        [1, '#ffffff']
                    ]
                }
            });
            Highcharts.charts[4].series[0].update({
                fillColor: {
                    stops: [
                        [0, '#ffc246'],
                        [1, '#ffffff']
                    ]
                }
            });
            Highcharts.charts[5].series[0].update({
                fillColor: {
                    stops: [
                        [0, '#5470de'],
                        [1, '#ffffff']
                    ]
                }
            });
            Highcharts.charts[6].series[0].update({
                fillColor: {
                    stops: [
                        [0, '#07beaa'],
                        [1, '#ffffff']
                    ]
                }
            });
            Highcharts.charts[3].series[0].update({
                fillColor: {
                    stops: [
                        [0, '#0d99e6'],
                        [1, '#ffffff']
                    ]
                }
            });
        }
        
    );
}