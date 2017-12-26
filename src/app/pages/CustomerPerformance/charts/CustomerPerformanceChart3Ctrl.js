/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.CustomerPerformance')
        .controller('CustomerPerformanceChart3Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", CustomerPerformanceChart3Ctrl]);

    /** @ngInject */
    function CustomerPerformanceChart3Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart3 = "chart"

        var layoutColors = baConfig.colors;
        $scope.data = [{
            "product": "A",
            "r1": Math.floor(Math.random() * 100),
            "r2": Math.floor(Math.random() * 100),
            "r3": Math.floor(Math.random() * 100)
        }, {
            "product": "B",
            "r1": Math.floor(Math.random() * 100),
            "r2": Math.floor(Math.random() * 100),
            "r3": Math.floor(Math.random() * 100)
        }, {
            "product": "C",
            "r1": Math.floor(Math.random() * 100),
            "r2": Math.floor(Math.random() * 100),
            "r3": Math.floor(Math.random() * 100)
        }, {
            "product": "D",
            "r1": Math.floor(Math.random() * 100),
            "r2": Math.floor(Math.random() * 100),
            "r3": Math.floor(Math.random() * 100)
        }]

        var id = "CustomerPerformanceChart3"

        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "legend": {
                "horizontalGap": 10,
                "maxColumns": 1,
                "position": "right",
                "useGraphSettings": true,
                "markerSize": 10
            },
            "dataProvider": $scope.data,
            "valueAxes": [{
                "stackType": "regular",
                "axisAlpha": 0.3,
                "gridAlpha": 0,
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false,
                fillAlpha:"#fff",
                fillColor:"#fff",
                axisAlpha:"#fff",
                axisColor:"#fff",
                title:"No. of Items"
            }],
            "graphs": [{
                "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                "fillAlphas": 0.8,
                "labelText": "[[value]]",
                "lineAlpha": 0.3,
                "title": "Item Defective",
                "type": "column",
                "color": "#000000",
                "valueField": "r1"
            }, {
                "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                "fillAlphas": 0.8,
                "labelText": "[[value]]",
                "lineAlpha": 0.3,
                "title": "Packaging Defective",
                "type": "column",
                "color": "#000000",
                "valueField": "r2"
            }, {
                "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                "fillAlphas": 0.8,
                "labelText": "[[value]]",
                "lineAlpha": 0.3,
                "title": "Wrong Equipment",
                "type": "column",
                "color": "#000000",
                "valueField": "r3"
            }],
            "categoryField": "product",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "position": "left",
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false,
                fillAlpha:"#fff",
                fillColor:"#fff",
                axisAlpha:"#fff",
                axisColor:"#fff"
            },
            "export": {
                "enabled": true
            }

        });
    }
})();