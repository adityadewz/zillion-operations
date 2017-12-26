/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.CustomerPerformance')
        .controller('CustomerPerformanceChart5Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", CustomerPerformanceChart5Ctrl]);

    /** @ngInject */
    function CustomerPerformanceChart5Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log("i am here")
        $scope.viewByChart5 = "chart"
        var id = "CustomerPerformanceChart5"
        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');
        $scope.product = "A"
        $scope.changeByProduct = function(product) {
            console.log("chart changed")
            $scope.product = product
            barChart.dataProvider = $scope.data[$scope.product];
            barChart.validateData();
        }

        function createData() {
            var arr = []
            for (var i = 1; i <= 12; i++) {
                var a=Math.floor(Math.random() * 10000);
                var b=Math.floor(Math.random() * 10000);
                arr.push({
                        "month": "Month-" + i.toString(),
                        "revenue": a+b,
                        "pCost": a,
                        "mExp": b
                    }

                )
            }

            return arr;
        }

        $scope.data = {
            A: createData(),
            B: createData(),
            C: createData(),
            D: createData()
        }

        console.log($scope.data)


        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "legend": {
                "useGraphSettings": true
            },
            "dataProvider": $scope.data[$scope.product],
            "valueAxes": [{
                "integersOnly": true,
                "maximum": 20000,
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
                "balloonText": "Revenue in [[category]]: [[value]]",
                "bullet": "round",
                // "hidden": true,
                "title": "Revenue",
                "valueField": "revenue",
                "fillAlphas": 0
            }, {
                "balloonText": "Production Cost in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Production Cost",
                "valueField": "pCost",
                "fillAlphas": 0
            }, {
                "balloonText": "Marketing Expense in [[category]]: [[value]]",
                "bullet": "round",
                "title": "Marketing Expense",
                "valueField": "mExp",
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