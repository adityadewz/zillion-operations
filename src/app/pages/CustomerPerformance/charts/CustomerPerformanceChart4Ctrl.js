/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.CustomerPerformance')
        .controller('CustomerPerformanceChart4Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", CustomerPerformanceChart4Ctrl]);

    /** @ngInject */
    function CustomerPerformanceChart4Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart4 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)
        $scope.quarter="q1";
        $scope.data = {
            q1: [{
                "product": "A",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }],
            q2: [{
                "product": "A",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }],
            q3: [{
                "product": "A",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }],
            q4:[{
                "product": "A",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "rate": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }]
        }

         $scope.changeByQuarter = function(quarter) {
            console.log("chart changed")
            $scope.quarter = quarter
            barChart.dataProvider = $scope.data[$scope.quarter];
            barChart.validateData();
        }

        var id = "CustomerPerformanceChart4";
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": $scope.data[$scope.quarter],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Customer Retention in %",
                "color": "#fff",
                "titleColor": "#fff",
                "titleBold": false
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>Customer Retention: [[value]]</b>",
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
                "titleBold": false
            },
            "export": {
                "enabled": true
            }

        });
    }
})();