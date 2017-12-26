/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.CustomerPerformance')
        .controller('CustomerPerformanceChart6Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", CustomerPerformanceChart6Ctrl]);

    /** @ngInject */
    function CustomerPerformanceChart6Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart6 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)

        $scope.data = [{
            "product": "A",
            "quantity": 3025,
            "color": "#FF9E01"
        }, {
            "product": "B",
            "quantity": 1882,
            "color": "#FF9E01"
        }, {
            "product": "C",
            "quantity": 1809,
            "color": "#FF9E01"
        }, {
            "product": "D",
            "quantity": 1322,
            "color": "#FF9E01"
        }]

        var id = "CustomerPerformanceChart6";
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": $scope.data,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Quantity in Inventory",
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false

            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "quantity"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "product",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 45,
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false
            },
            "export": {
                "enabled": true
            }

        });
    }
})();