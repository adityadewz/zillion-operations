/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('YOYChart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", YOYChart1Ctrl]);

    /** @ngInject */
    function YOYChart1Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart1 = "chart"

        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');
        var id = "YOYCHart1";
        $scope.data = [{
            "month": "Dec-10",
            "Product-A": 11323,
            "Product-B": 9545,
            "Product-C": 47600
        }, {
            "month": "Jan-11",
            "Product-A": 11400,
            "Product-B": 9800,
            "Product-C": 55200
        }, {
            "month": "Feb-11",
            "Product-A": 12000,
            "Product-B": 11201,
            "Product-C": 55176
        }, {
            "month": "Mar-11",
            "Product-A": 11400,
            "Product-B": 9400,
            "Product-C": 63800
        }, {
            "month": "Apr-11",
            "Product-A": 11500,
            "Product-B": 10000,
            "Product-C": 47200
        }, {
            "month": "May-11",
            "Product-A": 11200,
            "Product-B": 8500,
            "Product-C": 58200
        }, {
            "month": "Jun-11",
            "Product-A": 14200,
            "Product-B": 11700,
            "Product-C": 49000
        }, {
            "month": "Jul-11",
            "Product-A": 11200,
            "Product-B": 9819,
            "Product-C": 60000
        }, {
            "month": "Aug-11",
            "Product-A": 12700,
            "Product-B": 9700,
            "Product-C": 47100
        }, {
            "month": "Sep-11",
            "Product-A": 12500,
            "Product-B": 10900,
            "Product-C": 40000
        }, {
            "month": "Oct-11",
            "Product-A": 13500,
            "Product-B": 11600,
            "Product-C": 53100
        }, {
            "month": "Nov-11",
            "Product-A": 14500,
            "Product-B": 11900,
            "Product-C": 40000
        }, {
            "month": "Dec-11",
            "Product-A": 12901,
            "Product-B": 11291,
            "Product-C": 70000
        }]
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": $scope.data,
            "valueAxes": [{
                "integersOnly": true,
                "maximum": 80000,
                "minimum": 0,
                "reversed": false,
                "axisAlpha": 0,
                "dashLength": 5,
                "gridCount": 10,
                "position": "left",
                "title": "Place taken",
                "gridColor": "#fff",
                "color": "#fff"
            }],
            "startDuration": 0.5,
            "graphs": [{
                "balloonText": "Product-A in [[category]]: [[value]]",
                "bullet": "round",
                // "hidden": true,
                "title": "Product A",
                "valueField": "Product-A",
                "fillAlphas": 0
            }, {
                "balloonText": "Product-B in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Product B",
                "valueField": "Product-B",
                "fillAlphas": 0
            }, {
                "balloonText": "Product Market in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Product Market",
                "valueField": "Product-C",
                "fillAlphas": 0
            }],
            "chartCursor": {
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "month",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "fillAlpha": 0.05,
                "fillColor": "#fff",
                "gridAlpha": 0,
                "position": "bottom",
                "gridColor": "#fff",
                "color": "#fff"
            },
            "axisBase":{
                "color":"#fff",
                "titleColor":"#fff"
            },
            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        });
    }
})();