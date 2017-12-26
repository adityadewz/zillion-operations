/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.CVPAnalysis')
      .controller('CVPChart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths",CVPChart1Ctrl]);

  /** @ngInject */
  function CVPChart1Ctrl($scope, baConfig, $element, layoutPaths) {
    console.log("i am here")

    var layoutColors = baConfig.colors;
    console.log(layoutColors)
    var id = $element[0].getAttribute('id');
    var barChart = AmCharts.makeChart(id, {
    "type": "serial",
    "theme": "light",
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": [{
        "year": 1930,
        "Product-A": 10000,
        "Product-B": 50000,
        "Product-C": 30000
    }, {
        "year": 1934,
        "Product-A": 10000,
        "Product-B": 20000,
        "Product-C": 60000
    }, {
        "year": 1938,
        "Product-A": 20000,
        "Product-B": 30000,
        "Product-C": 10000
    }, {
        "year": 1950,
        "Product-A": 30000,
        "Product-B": 40000,
        "Product-C": 10000
    }, {
        "year": 1954,
        "Product-A": 50000,
        "Product-B": 10000,
        "Product-C": 20000
    }, {
        "year": 1958,
        "Product-A": 30000,
        "Product-B": 20000,
        "Product-C": 10000
    }, {
        "year": 1962,
        "Product-A": 10000,
        "Product-B": 20000,
        "Product-C": 30000
    }, {
        "year": 1966,
        "Product-A": 20000,
        "Product-B": 10000,
        "Product-C": 50000
    }, {
        "year": 1970,
        "Product-A": 30000,
        "Product-B": 50000,
        "Product-C": 20000
    }, {
        "year": 1974,
        "Product-A": 40000,
        "Product-B": 30000,
        "Product-C": 60000
    }, {
        "year": 1978,
        "Product-A": 10000,
        "Product-B": 20000,
        "Product-C": 40000
    }],
    "valueAxes": [{
        "integersOnly": true,
        "maximum": 80000,
        "minimum": 10000,
        "reversed": true,
        "axisAlpha": 0,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
        "title": "Place taken",
                "color":"#fff",
        "gridColor":"#fff"
    }],
    "startDuration": 0.5,
    "graphs": [{
        "balloonText": "place taken by Product-A in [[category]]: [[value]]",
        "bullet": "round",
        // "hidden": true,
        "title": "Product A",
        "valueField": "Product-A",
    "fillAlphas": 0
    }, {
        "balloonText": "place taken by Product-B in [[category]]: [[value]]",
        "bullet": "round",
        "title": "Product B",
        "valueField": "Product-B",
    "fillAlphas": 0
    }, {
        "balloonText": "place taken by Product-C in [[category]]: [[value]]",
        "bullet": "round",
        "title": "Product C",
        "valueField": "Product-C",
    "fillAlphas": 0
    }],
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "fillAlpha": 0.05,
        "fillColor": "#000000",
        "gridAlpha": 0,
        "position": "top",
        "color":"#fff",
        "gridColor":"#fff"
    },
    "export": {
      "enabled": true,
        "position": "bottom-right"
     }
});
  }
})();
