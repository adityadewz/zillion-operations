/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('dashboardChart3Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", dashboardChart3Ctrl]);

    /** @ngInject */
    function dashboardChart3Ctrl($scope, baConfig, $element, layoutPaths) {

        var layoutColors = baConfig.colors;
        $scope.viewByChart3 = "chart"

        // var id = $element[0].getAttribute('id');

        $scope.viewBy = "chart";

        var id = "clusteredBarChart";

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


        $scope.changeByMonth = function(month) {

            barChart.dataProvider = $scope.data[month];
            barChart.validateData();
        }

        $scope.data = {
            jan: [{
                "product": "A",
                "r1": 20,
                "r2": 30,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 40,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 10,
                "r4": 37
            }],
            feb: [{
                "product": "A",
                "r1": 40,
                "r2": 30,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 60,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 10,
                "r4": 37
            }],
            mar: [{
                "product": "A",
                "r1": 20,
                "r2": 30,
                "r3": 80,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 20,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 10,
                "r4": 37
            }],
            apr: [{
                "product": "A",
                "r1": 20,
                "r2": 30,
                "r3": 11,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 40,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 20,
                "r4": 37
            }],
            may: [{
                "product": "A",
                "r1": 20,
                "r2": 36,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 40,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 10,
                "r3": 10,
                "r4": 37
            }],
            jun: [{
                "product": "A",
                "r1": 20,
                "r2": 30,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 70,
                "r2": 40,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 10,
                "r4": 37
            }],
            jul: [{
                "product": "A",
                "r1": 20,
                "r2": 30,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 40,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 10,
                "r4": 38
            }],
            aug: [{
                "product": "A",
                "r1": 20,
                "r2": 30,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 40,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 20,
                "r4": 37
            }],
            sep: [{
                "product": "A",
                "r1": 20,
                "r2": 30,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 45,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 10,
                "r4": 35
            }],
            oct: [{
                "product": "A",
                "r1": 20,
                "r2": 30,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 10,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 10,
                "r4": 37
            }],
            nov: [{
                "product": "A",
                "r1": 20,
                "r2": 30,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 50,
                "r2": 40,
                "r3": 11,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 10,
                "r4": 37
            }],
            dec: [{
                "product": "A",
                "r1": 20,
                "r2": 37,
                "r3": 10,
                "r4": 31
            }, {
                "product": "B",
                "r1": 20,
                "r2": 40,
                "r3": 81,
                "r4": 41
            }, {
                "product": "C",
                "r1": 60,
                "r2": 40,
                "r3": 10,
                "r4": 37
            }]
        }

        $scope.month = "jan"

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
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false,
                "title": "No of Items",
                "gridColor": "#fff"
            }],
            // AmLegend:[
            // {
            //     color:"#fff"
            // }],
            "graphs": [{
                "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                "fillAlphas": 0.8,
                "labelText": "[[value]]",
                "lineAlpha": 0.3,
                "title": "Poor Storage",
                "type": "column",
                "color": "#000000",
                "valueField": "r1"
            }, {
                "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                "fillAlphas": 0.8,
                "labelText": "[[value]]",
                "lineAlpha": 0.3,
                "title": "Faulty Packaging",
                "type": "column",
                "color": "#000000",
                "valueField": "r2"
            }, {
                "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                "fillAlphas": 0.8,
                "labelText": "[[value]]",
                "lineAlpha": 0.3,
                "title": "Defective Item",
                "type": "column",
                "color": "#000000",
                "valueField": "r3"
            }, {
                "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                "fillAlphas": 0.8,
                "labelText": "[[value]]",
                "lineAlpha": 0.3,
                "title": "Q/C Rejected",
                "type": "column",
                "color": "#000000",
                "valueField": "r4"
            }],
            "categoryField": "product",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "position": "left",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false
            },
            "export": {
                "enabled": true
            }

        });
    }
})();