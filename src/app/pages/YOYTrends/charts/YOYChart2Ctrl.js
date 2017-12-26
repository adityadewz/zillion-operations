/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('YOYChart2Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", YOYChart2Ctrl]);

    /** @ngInject */
    function YOYChart2Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")

        var layoutColors = baConfig.colors;
        console.log(layoutColors)
        var id = "YOYCHart2"
        $scope.viewByChart2 = "chart";
        $scope.data = [{
            "month": "Dec-10",
            "Product-A": 113230,
            "Product-B": 95450,
            "Product-C": 476000
        }, {
            "month": "Jan-11",
            "Product-A": 114000,
            "Product-B": 98000,
            "Product-C": 552000
        }, {
            "month": "Feb-11",
            "Product-A": 120000,
            "Product-B": 112010,
            "Product-C": 551706
        }, {
            "month": "Mar-11",
            "Product-A": 114000,
            "Product-B": 94000,
            "Product-C": 638000
        }, {
            "month": "Apr-11",
            "Product-A": 115000,
            "Product-B": 100000,
            "Product-C": 472000
        }, {
            "month": "May-11",
            "Product-A": 112000,
            "Product-B": 85000,
            "Product-C": 582000
        }, {
            "month": "Jun-11",
            "Product-A": 142000,
            "Product-B": 117000,
            "Product-C": 490000
        }, {
            "month": "Jul-11",
            "Product-A": 112000,
            "Product-B": 98190,
            "Product-C": 600000
        }, {
            "month": "Aug-11",
            "Product-A": 127000,
            "Product-B": 97000,
            "Product-C": 471000
        }, {
            "month": "Sep-11",
            "Product-A": 125000,
            "Product-B": 109000,
            "Product-C": 400000
        }, {
            "month": "Oct-11",
            "Product-A": 135000,
            "Product-B": 116000,
            "Product-C": 531000
        }, {
            "month": "Nov-11",
            "Product-A": 145000,
            "Product-B": 119000,
            "Product-C": 400000
        }, {
            "month": "Dec-11",
            "Product-A": 129001,
            "Product-B": 112901,
            "Product-C": 700000
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
                "maximum": 800000,
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
            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        });
    }
})();