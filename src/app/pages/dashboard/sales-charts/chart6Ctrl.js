/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('dashboardChart6Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", dashboardChart6Ctrl]);

    /** @ngInject */
    function dashboardChart6Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart6 = "chart"

        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');
        var id = "dashboardChart6";
        $scope.data = [{
            "month": "Dec-10",
            "Product-A": 11323,
            "Product-B": 9545
        }, {
            "month": "Jan-11",
            "Product-A": 11400,
            "Product-B": 9800
        }, {
            "month": "Feb-11",
            "Product-A": 12000,
            "Product-B": 11201
        }, {
            "month": "Mar-11",
            "Product-A": 11400,
            "Product-B": 9400
        }, {
            "month": "Apr-11",
            "Product-A": 11500,
            "Product-B": 10000
        }, {
            "month": "May-11",
            "Product-A": 11200,
            "Product-B": 8500
        }, {
            "month": "Jun-11",
            "Product-A": 14200,
            "Product-B": 11700
        }, {
            "month": "Jul-11",
            "Product-A": 11200,
            "Product-B": 9819
        }, {
            "month": "Aug-11",
            "Product-A": 12700,
            "Product-B": 9700
        }, {
            "month": "Sep-11",
            "Product-A": 12500,
            "Product-B": 10900
        }, {
            "month": "Oct-11",
            "Product-A": 13500,
            "Product-B": 11600
        }, {
            "month": "Nov-11",
            "Product-A": 14500,
            "Product-B": 11900
        }, {
            "month": "Dec-11",
            "Product-A": 12901,
            "Product-B": 11291
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
                "title": "Branch Performance",
                gridColor: "#fff",
                color: "#fff",
                aixsColor: "#fff",
                "titleColor": "#fff",
                "titleBold": false
            }],
            "startDuration": 0.5,
            "graphs": [{
                "balloonText": "Output in [[category]]: [[value]]",
                "bullet": "round",
                // "hidden": true,
                "title": "Output",
                "valueField": "Product-A",
                "fillAlphas": 0
            }, {
                "balloonText": "Claim in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Claim",
                "valueField": "Product-B",
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
                gridColor: "#fff",
                color: "#fff",
                aixsColor: "#fff",
                "titleColor": "#fff",
                "titleBold": false
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