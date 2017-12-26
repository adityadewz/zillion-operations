/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Insights')
        .controller('InsightsChart3Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", InsightsChart3Ctrl]);

    /** @ngInject */
    function InsightsChart3Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart3 = "chart"

        var layoutColors = baConfig.colors;


        $scope.months = [{
            name: "January",
            value: "jan"
        }, {
            name: "February",
            value: "feb"
        }, {
            name: "March",
            value: "mar"
        }, {
            name: "April",
            value: "apr"
        }, {
            name: "May",
            value: "may"
        }, {
            name: "June",
            value: "jun"
        }, {
            name: "July",
            value: "jul"
        }, {
            name: "August",
            value: "aug"
        }, {
            name: "September",
            value: "sep"
        }, {
            name: "October",
            value: "oct"
        }, {
            name: "November",
            value: "nov"
        }, {
            name: "December",
            value: "dec"
        }]
        $scope.month = "jan"


        $scope.data = {
            jan: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            feb: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            mar: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            apr: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            may: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            jun: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            jul: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            aug: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            sep: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            oct: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            nov: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }],
            dec: [{
                "product": "Glass",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Electric Wire",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Circuits",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }, {
                "product": "Ardruino",
                "r1": Math.floor(Math.random() * 100),
                "r2": Math.floor(Math.random() * 100)
            }]
        }

         $scope.changeByMonth = function(month) {
            console.log("chart changed")
            $scope.month=month
            barChart.dataProvider = $scope.data[$scope.month];
            barChart.validateData();
            }

        var id = "InsightsChart3"

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
            "dataProvider": $scope.data[$scope.month],
            "valueAxes": [{
                "stackType": "regular",
                "axisAlpha": 0.3,
                "gridAlpha": 0,
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor": "#fff",
                "titleBold": false,
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
                "title": "Item is OK",
                "type": "column",
                "color": "#000000",
                "valueField": "r1"
            }, {
                "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                "fillAlphas": 0.8,
                "labelText": "[[value]]",
                "lineAlpha": 0.3,
                "title": "Item is Defective",
                "type": "column",
                "color": "#000000",
                "valueField": "r2"
            }],
            "categoryField": "product",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "position": "left",
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor": "#fff",
                "titleBold": false,
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