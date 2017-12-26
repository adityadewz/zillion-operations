/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.CVPAnalysis')
        .controller('CVPChart4Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", CVPChart4Ctrl]);

    /** @ngInject */
    function CVPChart4Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")

        var layoutColors = baConfig.colors;
        console.log(layoutColors)
        var id = $element[0].getAttribute('id');
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "categoryField": "month",
            "rotate": true,
            "startDuration": 1,
            "categoryAxis": {
                "gridPosition": "start",
                "position": "left",
                "color": "#fff",
                "gridColor": "#fff"
            },
            "trendLines": [],
            "graphs": [{
                "balloonText": "Series 2010:[[value]]",
                "fillAlphas": 0.8,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": "Series-2010",
                "type": "column",
                "valueField": "series-a"
            }, {
                "balloonText": "Series 2011:[[value]]",
                "fillAlphas": 0.8,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": "Series-2011",
                "type": "column",
                "valueField": "series-b"
            }],
            "guides": [],
            "valueAxes": [{
                "id": "ValueAxis-1",
                "position": "top",
                "axisAlpha": 0,
                "color": "#fff",
                "gridColor": "#fff"
            }],
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [{
                "month": "June",
                "series-a": 5000,
                "series-b": 18000
            }, {
                "month": "July",
                "series-a": 26000,
                "series-b": 22000
            }, {
                "month": "Aug",
                "series-a": 52000,
                "series-b": 23000
            }, {
                "month": "Sep",
                "series-a": 29000,
                "series-b": 35000
            }, {
                "month": "Oct",
                "series-a": 24000,
                "series-b": 54000
            }, {
                "month": "Nov",
                "series-a": 21000,
                "series-b": 25001
            }, {
                "month": "Dec",
                "series-a": 24000,
                "series-b": 45000
            }],
            "export": {
                "enabled": true
            }

        });
    }
})();