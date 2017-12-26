/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Insights')
        .controller('InsightsChart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", InsightsChart1Ctrl]);

    /** @ngInject */
    function InsightsChart1Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart1 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');

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
        $scope.changeByMonth = function(month) {
            console.log("chart changed")
            $scope.month = month
            barChart.dataProvider = $scope.data[$scope.month];
            barChart.validateData();
        }
        $scope.data = [{
            "month": "Dec-10",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Jan-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Feb-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Mar-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Apr-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "May-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Jun-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Jul-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Aug-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Sep-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Oct-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Nov-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }, {
            "month": "Dec-11",
            "Product-A": Math.floor(Math.random() * 100000),
            "Product-C": Math.floor(Math.random() * 10000)
        }]



        var id = "InsightsChart1"
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": $scope.data,
            "valueAxes": [{
                "integersOnly": true,
                "maximum": 100000,
                "minimum": 0,
                "reversed": false,
                "axisAlpha": 0,
                "dashLength": 5,
                "gridCount": 10,
                "position": "left",
                "title": "Average Unit Contribution Margin",
                gridColor: "#fff",
                color: "#fff",
                aixsColor: "#fff",
                "titleColor": "#fff",
                "titleBold": false
            }],
            "startDuration": 0.5,
            "graphs": [{
                "balloonText": "Profit Margin in [[category]]: [[value]]",
                "bullet": "round",
                // "hidden": true,
                "title": "Profit Margin",
                "valueField": "Product-A",
                "fillAlphas": 0
            }, {
                "balloonText": "Volume of Production in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Volume of Production",
                "valueField": "Product-C",
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
            "axisBase": {
                "color": "#fff",
                "titleColor": "#fff"
            },
            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        });
    }
})();