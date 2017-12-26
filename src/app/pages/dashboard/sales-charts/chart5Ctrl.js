/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('dashboardChart5Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", dashboardChart5Ctrl]);

    /** @ngInject */
    function dashboardChart5Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart5 = "chart"

        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');
        var id = "dashboardChart5";

        $scope.line="A";

        $scope.data = {
            A:[{
            "month": "Jan",
            "output": 11323,
            "claim": 9545
        },
        {
            "month": "Feb",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Mar",
            "output": 11323,
            "claim": 9545
        },
        {
            "month": "Apr",
            "output": 61323,
            "claim": 9545
        },
        {
            "month": "May",
            "output": 41323,
            "claim": 9545
        },
        {
            "month": "Jun",
            "output": 14323,
            "claim": 9545
        },
        {
            "month": "Jul",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Aug",
            "output": 15323,
            "claim": 9545
        },
        {
            "month": "Sep",
            "output": 11323,
            "claim": 9545
        },
        {
            "month": "Oct",
            "output": 11523,
            "claim": 9545
        },
        {
            "month": "Nov",
            "output": 16323,
            "claim": 9545
        },
        {
            "month": "Dec",
            "output": 51323,
            "claim": 9545
        }],
        B:[{
            "month": "Jan",
            "output": 51323,
            "claim": 9545
        },
        {
            "month": "Feb",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Mar",
            "output": 11323,
            "claim": 9545
        },
        {
            "month": "Apr",
            "output": 61323,
            "claim": 9545
        },
        {
            "month": "May",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Jun",
            "output": 14123,
            "claim": 9545
        },
        {
            "month": "Jul",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Aug",
            "output": 15323,
            "claim": 9545
        },
        {
            "month": "Sep",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Oct",
            "output": 11325,
            "claim": 9545
        },
        {
            "month": "Nov",
            "output": 16323,
            "claim": 9545
        },
        {
            "month": "Dec",
            "output": 51323,
            "claim": 9545
        }],
        C:[{
            "month": "Jan",
            "output": 11323,
            "claim": 9545
        },
        {
            "month": "Feb",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Mar",
            "output": 11323,
            "claim": 9545
        },
        {
            "month": "Apr",
            "output": 61323,
            "claim": 9545
        },
        {
            "month": "May",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Jun",
            "output": 16323,
            "claim": 9545
        },
        {
            "month": "Jul",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Aug",
            "output": 15323,
            "claim": 9545
        },
        {
            "month": "Sep",
            "output": 21723,
            "claim": 9545
        },
        {
            "month": "Oct",
            "output": 11323,
            "claim": 9545
        },
        {
            "month": "Nov",
            "output": 16323,
            "claim": 9545
        },
        {
            "month": "Dec",
            "output": 51323,
            "claim": 9545
        }],
        D:[{
            "month": "Jan",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Feb",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Mar",
            "output": 11323,
            "claim": 9545
        },
        {
            "month": "Apr",
            "output": 61423,
            "claim": 9545
        },
        {
            "month": "May",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Jun",
            "output": 14323,
            "claim": 9545
        },
        {
            "month": "Jul",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Aug",
            "output": 15323,
            "claim": 9545
        },
        {
            "month": "Sep",
            "output": 21323,
            "claim": 9545
        },
        {
            "month": "Oct",
            "output": 11523,
            "claim": 9545
        },
        {
            "month": "Nov",
            "output": 16323,
            "claim": 9545
        },
        {
            "month": "Dec",
            "output": 21323,
            "claim": 9545
        }]
        }

         $scope.changeByLine = function(line) {

            barChart.dataProvider = $scope.data[$scope.line];
            barChart.validateData();
        }

        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": $scope.data[$scope.line],
            "valueAxes": [{
                "integersOnly": true,
                "maximum": 80000,
                "minimum": 0,
                "reversed": false,
                "axisAlpha": 0,
                "dashLength": 5,
                "gridCount": 10,
                "position": "left",
                "title": "Place taken",
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false
            }],
            "startDuration": 0.5,
            "graphs": [{
                "balloonText": "Output in [[category]]: [[value]]",
                "bullet": "round",
                // "hidden": true,
                "title": "Output",
                "valueField": "output",
                "fillAlphas": 0
            }, {
                "balloonText": "Claim in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Claim",
                "valueField": "claim",
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
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false
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