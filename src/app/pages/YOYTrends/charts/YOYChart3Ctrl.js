/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('YOYChart3Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", YOYChart3Ctrl]);

    /** @ngInject */
    function YOYChart3Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart3 = "chart"

        var layoutColors = baConfig.colors;
        console.log(layoutColors)
        $scope.data = [{
                "date": "2010-12-01",
                "value": 13
            }, {
                "date": "2011-01-01",
                "value": 11
            }, {
                "date": "2011-02-01",
                "value": 15
            }, {
                "date": "2011-03-01",
                "value": 16
            }, {
                "date": "2011-04-01",
                "value": 18
            }, {
                "date": "2011-05-01",
                "value": 13
            }, {
                "date": "2011-06-01",
                "value": 22
            }, {
                "date": "2011-07-01",
                "value": 23
            }, {
                "date": "2011-08-01",
                "value": 20
            }, {
                "date": "2011-09-01",
                "value": 17
            }, {
                "date": "2011-10-01",
                "value": 16
            }, {
                "date": "2011-11-01",
                "value": 18
            }, {
                "date": "2011-12-01",
                "value": 21
            }]
            // var id = $element[0].getAttribute('id');

        var id = "YOYCHart3"

        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "mouseWheelZoomEnabled": true,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "ignoreAxisWidth": true,
                "gridColor": "#fff",
                "color": "#fff"
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                "id": "g1",
                "balloon": {
                    "drop": true,
                    "adjustBorderColor": false,
                    "color": "#ffffff"
                },
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "red line",
                "useLineColorForBulletBorder": true,
                "valueField": "value",
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            }],
            "chartScrollbar": {
                "graph": "g1",
                "oppositeAxis": false,
                "offset": 30,
                "scrollbarHeight": 80,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color": "#AAAAAA"
            },
            "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 1,
                "cursorColor": "#258cbb",
                "limitToGraph": "g1",
                "valueLineAlpha": 0.2,
                "valueZoomable": true
            },
            "valueScrollbar": {
                "oppositeAxis": false,
                "offset": 50,
                "scrollbarHeight": 10
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true,
                "gridColor": "#fff",
                "color": "#fff"
            },
            "export": {
                "enabled": true
            },
            "dataProvider": $scope.data
        });
    }
})();