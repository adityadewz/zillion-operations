/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Insights')
        .controller('InsightsChart6Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", InsightsChart6Ctrl]);

    /** @ngInject */
    function InsightsChart6Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart6 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)
        $scope.product="a";

        $scope.data = {
            a:[{
            "quarter": "Q1",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q2",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q3",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q4",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }],
        b:[{
            "quarter": "Q1",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q2",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q3",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q4",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }],
        c:[{
            "quarter": "Q1",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q2",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q3",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q4",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }],
        d:[{
            "quarter": "Q1",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q2",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q3",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }, {
            "quarter": "Q4",
            "quantity": Math.floor(Math.random()*100),
            "color": "#FF9E01"
        }]
        }


          $scope.changeByProduct = function(product) {
            console.log("chart changed")
            $scope.product=product
            barChart.dataProvider = $scope.data[$scope.product];
            barChart.validateData();
            }


        var id = "InsightsChart6";
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": $scope.data[$scope.product],
            "valueAxes": [{
                integersOnly:true,
                "axisAlpha": 0,
                "position": "left",
                "title": "No. Of Days ",
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false,
                fillAlpha:"#fff",
                fillColor:"#fff",
                axisAlpha:"#fff",
                axisColor:"#fff"

            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "quantity"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "quarter",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 45,
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false,
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