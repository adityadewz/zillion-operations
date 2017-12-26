/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('YOYChart4Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", YOYChart4Ctrl]);

    /** @ngInject */
    function YOYChart4Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart4 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');

        $scope.changeByProduct = function(product) {
            console.log("chart changed")
            var newData = {
                producta: [{
                    "month": "June",
                    "series-a": 15000,
                    "series-b": 18000
                }, {
                    "month": "July",
                    "series-a": 26000,
                    "series-b": 2200
                }, {
                    "month": "Aug",
                    "series-a": 52000,
                    "series-b": 2300
                }, {
                    "month": "Sep",
                    "series-a": 29000,
                    "series-b": 31000
                }, {
                    "month": "Oct",
                    "series-a": 24000,
                    "series-b": 94000
                }, {
                    "month": "Nov",
                    "series-a": 21000,
                    "series-b": 75001
                }, {
                    "month": "Dec",
                    "series-a": 24000,
                    "series-b": 41000
                }],
                productb: [{
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
                }]}

            barChart.dataProvider = newData[product];
            barChart.validateData();
            }

               $scope.changeByType = function(type) {
            console.log("chart changed")
            var newData = {
                ytd: [{
                    "month": "June",
                    "series-a": 15000,
                    "series-b": 18000
                }, {
                    "month": "July",
                    "series-a": 26000,
                    "series-b": 22000
                }, {
                    "month": "Aug",
                    "series-a": 52000,
                    "series-b": 2300
                }, {
                    "month": "Sep",
                    "series-a": 29000,
                    "series-b": 91000
                }, {
                    "month": "Oct",
                    "series-a": 24000,
                    "series-b": 34000
                }, {
                    "month": "Nov",
                    "series-a": 21000,
                    "series-b": 75001
                }, {
                    "month": "Dec",
                    "series-a": 64000,
                    "series-b": 4100
                }],
                qtd: [{
                    "month": "June",
                    "series-a": 5100,
                    "series-b": 18000
                }, {
                    "month": "July",
                    "series-a": 26000,
                    "series-b": 24000
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
                    "series-b": 51000
                }, {
                    "month": "Nov",
                    "series-a": 21000,
                    "series-b": 25001
                }, {
                    "month": "Dec",
                    "series-a": 22000,
                    "series-b": 41000
                }]
            }


            barChart.dataProvider = newData[type];
            barChart.validateData();
        }

         

        $scope.data = [{
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
        }]
        var id = "YOYCHart4"
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "categoryField": "month",
            "rotate": false,
            "startDuration": 1,
            "categoryAxis": {
                "gridPosition": "start",
                "position": "left",
                "gridColor": "#fff",
                "color": "#fff"
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
                "position": "bottom",
                "axisAlpha": 0,
                "gridColor": "#fff",
                "color": "#fff"
            }],
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": $scope.data,
            "export": {
                "enabled": true
            }

        });
    }
})();