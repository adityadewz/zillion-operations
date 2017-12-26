/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.SupplyChain')
        .controller('SupplyChainChart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", SupplyChainChart1Ctrl]);

    /** @ngInject */
    function SupplyChainChart1Ctrl($scope, baConfig, $element, layoutPaths) {
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

           $scope.data = {
                jan: [{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                feb:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                mar:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                apr:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                may:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                jun:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                jul:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                aug:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                sep:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                oct:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                nov:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }],
                dec:[{
                    "product": "A",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 18000
                }, {
                    "product": "B",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 22000
                }, {
                    "product": "C",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 2300
                }, {
                    "product": "D",
                    "order": Math.floor(Math.random()*100000+1),
                    "inventory": 91000
                }]
            }


        var id = "SupplyChainChart1"
        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "categoryField": "product",
            "rotate": false,
            "startDuration": 1,
            "categoryAxis": {
                "gridPosition": "start",
                "position": "left",
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false
            },
            "trendLines": [],
            "graphs": [{
                "balloonText": "Order:[[value]]",
                "fillAlphas": 0.8,
                "id": "AmGraph-1",
                "lineAlpha": 0.2,
                "title": "Order",
                "type": "column",
                "valueField": "order"
            }, {
                "balloonText": "Inventory:[[value]]",
                "fillAlphas": 0.8,
                "id": "AmGraph-2",
                "lineAlpha": 0.2,
                "title": "Inventory",
                "type": "column",
                "valueField": "inventory"
            }],
            "guides": [],
            "valueAxes": [{
                "id": "ValueAxis-1",
                "position": "bottom",
                "axisAlpha": 0,
                "gridColor": "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false,
                "title":"No. of items"
            }],
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": $scope.data[$scope.month],
            "export": {
                "enabled": true
            }

        });
    }
})();