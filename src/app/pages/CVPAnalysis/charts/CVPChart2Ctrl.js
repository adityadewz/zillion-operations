/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.CVPAnalysis')
        .controller('CVPChart2Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", CVPChart2Ctrl]);

    /** @ngInject */
    function CVPChart2Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")

        var layoutColors = baConfig.colors;
        console.log(layoutColors)
        var id = $element[0].getAttribute('id');
           $scope.data = [ {
            "month": "Jan-11",
            "Product-A": 51400,
            "Product-B": 9800,
            "Product-C": 55200
        }, {
            "month": "Feb-11",
            "Product-A": 32000,
            "Product-B": 11201,
            "Product-C": 55176
        }, {
            "month": "Mar-11",
            "Product-A": 51400,
            "Product-B": 9400,
            "Product-C": 63800
        }, {
            "month": "Apr-11",
            "Product-A": 31500,
            "Product-B": 10000,
            "Product-C": 47200
        }, {
            "month": "May-11",
            "Product-A": 51200,
            "Product-B": 8500,
            "Product-C": 58200
        }, {
            "month": "Jun-11",
            "Product-A": 44200,
            "Product-B": 11700,
            "Product-C": 49000
        }, {
            "month": "Jul-11",
            "Product-A": 51200,
            "Product-B": 9819,
            "Product-C": 60000
        }, {
            "month": "Aug-11",
            "Product-A": 42700,
            "Product-B": 9700,
            "Product-C": 47100
        }, {
            "month": "Sep-11",
            "Product-A": 32500,
            "Product-B": 10900,
            "Product-C": 40000
        }, {
            "month": "Oct-11",
            "Product-A": 43500,
            "Product-B": 11600,
            "Product-C": 53100
        }, {
            "month": "Nov-11",
            "Product-A": 34500,
            "Product-B": 11900,
            "Product-C": 40000
        }, {
            "month": "Dec-11",
            "Product-A": 62901,
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
                "balloonText": "Total cost in [[category]]: [[value]]",
                "bullet": "round",
                // "hidden": true,
                "title": "Total Cost",
                "valueField": "Product-A",
                "fillAlphas": 0
            }, {
                "balloonText": "Total profit in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Total Profit",
                "valueField": "Product-B",
                "fillAlphas": 0
            }, {
                "balloonText": "Total Revenue in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Total Revenue",
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