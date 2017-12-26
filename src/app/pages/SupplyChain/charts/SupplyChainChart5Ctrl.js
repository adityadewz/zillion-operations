/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.SupplyChain')
        .controller('SupplyChainChart5Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", SupplyChainChart5Ctrl]);

    /** @ngInject */
    function SupplyChainChart5Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart5 = "chart"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');
            $scope.product="A"
        $scope.changeByProduct = function(product) {
            console.log("chart changed")
            $scope.product = product
            barChart.dataProvider = $scope.data[$scope.product];
            barChart.validateData();
        }

        function createData()
        {
            var arr=[]
            for(var i=1;i<=30;i++)
            {
                arr.push({
                "day": "Day-"+i.toString(),
                "production": Math.floor(Math.random() * 100),
                "shipped":  Math.floor(Math.random() * 100)
            })
            }

            return arr;
        }

        $scope.data = {
            A: createData(),
            B:createData(),
            C:createData(),
            D:createData()
        }


        var id = "SupplyChainChart5"
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": $scope.data[$scope.product],
            "valueAxes": [{
                "integersOnly": true,
                "maximum": 100,
                "minimum": 0,
                "reversed": false,
                "axisAlpha": 0,
                "dashLength": 5,
                "gridCount": 10,
                "position": "left",
                "title": "No. of items",
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false
            }],
            "startDuration": 0.5,
            "graphs": [{
                "balloonText": "Production in [[category]]: [[value]]",
                "bullet": "round",
                // "hidden": true,
                "title": "Production",
                "valueField": "production",
                "fillAlphas": 0
            }, {
                "balloonText": "Shipped [[category]]: [[value]]",
                "bullet": "round",
                "title": "Shipped",
                "valueField": "shipped",
                "fillAlphas": 0
            }],
    "chartScrollbar": {
        "autoGridCount": true,
        "graph": "g1",
        "scrollbarHeight": 40
    },

            "chartCursor": {
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "day",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "fillAlpha": 0.05,
                "fillColor": "#000",
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