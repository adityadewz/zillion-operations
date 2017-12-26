/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Insights')
        .controller('InsightsChart4Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", InsightsChart4Ctrl]);

    /** @ngInject */
    function InsightsChart4Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart4 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)
        $scope.unit="u1";
        $scope.data = {
            u1: [{
                "product": "Solar",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Steam",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Oil",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Gas",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }],
            u2: [{
                "product": "Solar",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Steam",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Oil",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Gas",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }],
            u3: [{
                "product": "Solar",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Steam",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Oil",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Gas",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }],
            u4:[{
                "product": "Solar",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Steam",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Oil",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }, {
                "product": "Gas",
                "rate": Math.floor(Math.random() * 100000),
                "color": "#FF9E01"
            }]
        }

         $scope.changeByUnit = function(unit) {
            console.log("chart changed")
            $scope.unit = unit
            barChart.dataProvider = $scope.data[$scope.unit];
            barChart.validateData();
        }

        var id = "InsightsChart4";
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": $scope.data[$scope.unit],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Cost in INR",
                "color": "#fff",
                "titleColor": "#fff",
                "titleBold": false,
                fillAlpha:"#fff",
                fillColor:"#fff",
                axisAlpha:"#fff",
                axisColor:"#fff",
                gridColor:"#fff"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>Cost in INR: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "rate"
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
                "color": "#fff",
                "titleColor": "#fff",
                "titleBold": false,
                "color": "#fff",
                "titleColor": "#fff",
                "titleBold": false,
                fillAlpha:"#fff",
                fillColor:"#fff",
                axisAlpha:"#fff",
                axisColor:"#fff",
                gridColor:"#fff"
            },
            "export": {
                "enabled": true
            }

        });
    }
})();