/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.SupplyChain')
        .controller('SupplyChainChart2Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", SupplyChainChart2Ctrl]);

    /** @ngInject */
    function SupplyChainChart2Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart2 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)

        $scope.data = [{
            "product": "A",
            "time": 3,
            "color": "#FF9E01"
        }, {
            "product": "B",
            "time": 4,
            "color": "#FF9E01"
        }, {
            "product": "C",
            "time": 2,
            "color": "#FF9E01"
        }, {
            "product": "D",
            "time": 6,
            "color": "#FF9E01"
        }]

        var id = "SupplyChainChart2";
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": $scope.data,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Time in Hrs.",
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
                "valueField": "time"
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
                "titleBold":false,
                "titleColor":"#fff",
                "titleBold":false
            },
            "export": {
                "enabled": true
            }

        });
    }
})();