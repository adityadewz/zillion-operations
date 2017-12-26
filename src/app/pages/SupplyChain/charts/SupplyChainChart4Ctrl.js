/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.SupplyChain')
        .controller('SupplyChainChart4Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", SupplyChainChart4Ctrl]);

    /** @ngInject */
    function SupplyChainChart4Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart4 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)

        $scope.data = [{
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

        var id = "SupplyChainChart4";
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": $scope.data,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Rate of filling in %",
                "color": "#fff",
                "titleColor": "#fff",
                "titleBold": false,
                gridColor: "#fff"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>Product [[category]] Fill Rate: [[value]]</b>",
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
                gridColor: "#fff"
            },
            "export": {
                "enabled": true
            }

        });
    }
})();