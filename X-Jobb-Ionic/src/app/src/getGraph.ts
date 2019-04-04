import * as HighCharts from 'highcharts';


//Graph library using variable sData that is parsed from the JSON-file

export function getGraph(sData, strTitle) {

    var myChart = HighCharts.chart('container', {
      chart: {
        type: 'spline',
        zoomType: 'x',
        events: {
          load: function() {
            var renderTimeStamp = new Date().getTime(); // End timestamp showing when graph is rendered
            var logg = "Time elapsed: " + renderTimeStamp
            var label = this.renderer.label(logg, 100, 120);
            label.attr({fill: '#2f7ed8',padding: 10, r: 5, zIndex: 8});
            label.css({color: '#FFFFFF'});
            label.add();

            setTimeout(function() {
              label.fadeOut();
            }, 5000);
          }
        }
      },
      title: {
        text: String(strTitle)
      },
      tooltip: {
        valueDecimals: 3,
        valueSuffix: '°C'
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        },
        labels: {
          format: '{value}°'
        }
      },
      xAxis: {
        type: 'category'
      },
      series: <Array<Highcharts.SeriesOptionsType>>[
        {
          animation: false,
          turboThreshold: 0, //This makes it possible for large arrays!
          data: sData,
          lineWidth: 0.6,
          name: 'Temperature'
        }
      ]
    });

  return myChart;
}
