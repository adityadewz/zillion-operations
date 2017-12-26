/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Insights')
        .controller('InsightsChart2Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", InsightsChart2Ctrl]);

    /** @ngInject */
    function InsightsChart2Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart2 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)


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

        $scope.data = {
            jan: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            feb: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            mar: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            apr: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            may: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            may: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            jun: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            jul: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            aug: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            sep: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            oct: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            nov: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }],
            dec: [{
                "product": "A",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "B",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "C",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }, {
                "product": "D",
                "satisfaction": Math.floor(Math.random() * 10000),
                "color": "#FF9E01"
            }]
        }

        var id = "InsightsChart2";
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": $scope.data[$scope.month],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "EBITDA",
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor": "#fff",
                "titleBold": false,
                fillAlpha:"#fff",
                fillColor:"#fff",
                axisAlpha:"#fff",
                axisColor:"#fff",
                title:"Value in INR(lacs)"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "satisfaction"
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