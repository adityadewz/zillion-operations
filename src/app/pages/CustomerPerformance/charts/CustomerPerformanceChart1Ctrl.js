/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.CustomerPerformance')
        .controller('CustomerPerformanceChart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", CustomerPerformanceChart1Ctrl]);

    /** @ngInject */
    function CustomerPerformanceChart1Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart1 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');

        $scope.months=[
        {
            name:"January",
            value:"jan"
        },
        {
            name:"February",
            value:"feb"
        },
        {
            name:"March",
            value:"mar"
        },
        {
            name:"April",
            value:"apr"
        },
        {
            name:"May",
            value:"may"
        },
        {
            name:"June",
            value:"jun"
        },
        {
            name:"July",
            value:"jul"
        },
        {
            name:"August",
            value:"aug"
        },
        {
            name:"September",
            value:"sep"
        },
        {
            name:"October",
            value:"oct"
        },
        {
            name:"November",
            value:"nov"
        },
        {
            name:"December",
            value:"dec"
        }]
            $scope.month="jan"
        $scope.changeByMonth = function(month) {
            console.log("chart changed")
            $scope.month=month
            barChart.dataProvider = $scope.data[$scope.month];
            barChart.validateData();
            }
                  $scope.data = [{
            "month": "Dec-10",
            "Product-A": 11,
            "Product-B": 35,
            "Product-C": 47
        }, {
            "month": "Jan-11",
            "Product-A": 11,
            "Product-B": 48,
            "Product-C": 55
        }, {
            "month": "Feb-11",
            "Product-A": 12,
            "Product-B": 41,
            "Product-C": 55
        }, {
            "month": "Mar-11",
            "Product-A": 11,
            "Product-B": 54,
            "Product-C": 63
        }, {
            "month": "Apr-11",
            "Product-A": 11,
            "Product-B": 30,
            "Product-C": 47
        }, {
            "month": "May-11",
            "Product-A": 11,
            "Product-B": 45,
            "Product-C": 58
        }, {
            "month": "Jun-11",
            "Product-A": 14,
            "Product-B": 31,
            "Product-C": 49
        }, {
            "month": "Jul-11",
            "Product-A": 11,
            "Product-B": 48,
            "Product-C": 60
        }, {
            "month": "Aug-11",
            "Product-A": 12,
            "Product-B": 37,
            "Product-C": 47
        }, {
            "month": "Sep-11",
            "Product-A": 12,
            "Product-B": 30,
            "Product-C": 40
        }, {
            "month": "Oct-11",
            "Product-A": 13,
            "Product-B": 41,
            "Product-C": 53
        }, {
            "month": "Nov-11",
            "Product-A": 14,
            "Product-B": 31,
            "Product-C": 40
        }, {
            "month": "Dec-11",
            "Product-A": 12,
            "Product-B": 51,
            "Product-C": 70
        }]

           

        var id = "CustomerPerformanceChart1"
        var barChart = AmCharts.makeChart(id,{
            "type": "serial",
            "theme": "light",
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": $scope.data,
            "valueAxes": [{
                "integersOnly": true,
                "maximum": 100,
                "minimum": 0,
                "reversed": false,
                "axisAlpha": 0,
                "dashLength": 5,
                "gridCount": 10,
                "position": "left",
                "title": "Service Renewal Rate in %",
                gridColor: "#fff",
                color: "#fff",
                aixsColor: "#fff",
                "titleColor": "#fff",
                "titleBold": false
            }],
            "startDuration": 0.5,
            "graphs": [{
                "balloonText": "Product-A in [[category]]: [[value]]",
                "bullet": "round",
                // "hidden": true,
                "title": "Product A",
                "valueField": "Product-A",
                "fillAlphas": 0
            }, {
                "balloonText": "Product-B in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Product B",
                "valueField": "Product-B",
                "fillAlphas": 0
            }, {
                "balloonText": "Product-C in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Product C",
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
                "gridColor": "#fff",
                gridColor: "#fff",
                color: "#fff",
                aixsColor: "#fff",
                "titleColor": "#fff",
                "titleBold": false
            },
            "axisBase":{
                "color":"#fff",
                "titleColor":"#fff"
            },
            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        });
    }
})();