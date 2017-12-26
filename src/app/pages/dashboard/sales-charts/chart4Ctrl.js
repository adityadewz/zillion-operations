/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
        'use strict';

        angular.module('BlurAdmin.pages.dashboard')
            .controller('dashboardChart4Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", dashboardChart4Ctrl]);

        /** @ngInject */
        function dashboardChart4Ctrl($scope, baConfig, $element, layoutPaths) {
            console.log("i am here")
            $scope.viewByChart4 = "chart"
            var layoutColors = baConfig.colors;

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

            $scope.products = ["Product-A", "Product-B", "Product-C", "Product-D"]

            $scope.days = ["Week-1", "Week-2", "Week-3", "Week-4"]
                // $scope.month = "jan";
                // $scope.product="A";
            $scope.changeByProduct = function(product) {
                $scope.product=product;
                barChart.dataProvider = $scope.data[$scope.product][$scope.month];
                barChart.validateData();
            }

            $scope.changeByMonth = function(month) {
                $scope.month=month;
                barChart.dataProvider = $scope.data[$scope.product][$scope.month];
                barChart.validateData();
            }

            function getData() {
                var arr = {
                    "Product-A": {
                      jan:[],feb:[],mar:[],apr:[],may:[],jun:[],jul:[],aug:[],sep:[],oct:[],nov:[],dec:[]
                      },
                        "Product-B": {
                      jan:[],feb:[],mar:[],apr:[],may:[],jun:[],jul:[],aug:[],sep:[],oct:[],nov:[],dec:[]
                      },
                        "Product-C": {
                      jan:[],feb:[],mar:[],apr:[],may:[],jun:[],jul:[],aug:[],sep:[],oct:[],nov:[],dec:[]
                      },
                        "Product-D": {
                      jan:[],feb:[],mar:[],apr:[],may:[],jun:[],jul:[],aug:[],sep:[],oct:[],nov:[],dec:[]
                      }
                    };
                    var months = $scope.months;
                    var products = $scope.products;
                    var days = $scope.days
                    for (var j = 0; j < products.length; j++) {
                        for (var i = 0; i < months.length; i++) {
                            for (var k = 0; k < days.length; k++) {
                                arr[products[j]][months[i].value].push({
                                    day: days[k],
                                    throughput: Math.floor(Math.random() * 100),
                                    color: "#00D3C2"
                                })
                            }
                        }
                    }
                    return arr;
                }

                $scope.data = getData();
                $scope.month = "jan";
                $scope.product = "Product-A"
                console.log($scope.data)

                var id = "dashboardChart4";
                var barChart = AmCharts.makeChart(id, {
                    type: 'serial',
                    theme: 'blur',
                    color: layoutColors.defaultText,
                    dataProvider: $scope.data[$scope.product][$scope.month],
                    valueAxes: [{
                        axisAlpha: 0,
                        position: 'left',
                        title: 'Throughput',
                        gridAlpha: 0.5,
                        gridColor: "#fff",
                        "color": "#fff",
                        "titleColor": "#fff",
                        "titleBold": false
                    }],
                    startDuration: 1,
                    graphs: [{
                        balloonText: '<b>[[category]]: [[value]]</b>',
                        fillColorsField: 'color',
                        fillAlphas: 0.7,
                        lineAlpha: 0.2,
                        type: 'column',
                        valueField: 'throughput'
                    }],
                    chartCursor: {
                        categoryBalloonEnabled: false,
                        cursorAlpha: 0,
                        zoomable: false
                    },
                    categoryField: 'day',
                    categoryAxis: {
                        gridPosition: 'start',
                        labelRotation: 45,
                        gridAlpha: 0.5,
                        gridColor: "#fff",
                        "color": "#fff",
                        "titleColor": "#fff",
                        "titleBold": false
                    },
                    export: {
                        enabled: true
                    },
                    creditsPosition: 'top-right',
                    pathToImages: layoutPaths.images.amChart
                });
            }
        })();