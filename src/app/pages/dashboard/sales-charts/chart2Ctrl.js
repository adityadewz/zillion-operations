/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('dashboardChart2Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", dashboardChart2Ctrl]);

    /** @ngInject */
    function dashboardChart2Ctrl($scope, baConfig, $element, layoutPaths) {

        $scope.viewByChart2 = "chart"

        var layoutColors = baConfig.colors;
        var id = "barChart2";
        $scope.data = {
            2017: {
                jan: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                feb: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                mar: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                apr: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                may: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                jun: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                jul: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                aug: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                sep: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                oct: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                nov: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                dec: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ]
            },
            2016: {
                jan: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                feb: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                mar: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                apr: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                may: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                jun: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                jul: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                aug: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                sep: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                oct: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                nov: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                dec: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ]
            },
            2015: {
                jan: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                feb: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                mar: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                apr: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                may: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                jun: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                jul: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                aug: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                sep: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                oct: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                nov: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                dec: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ]
            },
            2014: {
                jan: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                feb: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                mar: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                apr: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                may: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                jun: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                jul: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                aug: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                sep: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                oct: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                nov: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ],
                dec: [

                    {
                        product: 'A',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'B',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'C',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }, {
                        product: 'D',
                        output: Math.floor(Math.random() * 1000),
                        color: "#00D3C2"
                    }
                ]
            }
        }

        $scope.years=[
        "2014",
        "2015",
        "2016",
        "2017"]

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

            $scope.month = "jan";
            $scope.year="2017"


        $scope.changeByMonth = function(month) {
            console.log(month)
            $scope.month = month
            barChart.dataProvider = $scope.data[$scope.year][$scope.month];
            barChart.validateData();
        }

        $scope.changeByYear = function(year) {
            $scope.year = year
            barChart.dataProvider = $scope.data[$scope.year][$scope.month];
            barChart.validateData();
        }

        var barChart = AmCharts.makeChart(id, {
            type: 'serial',
            theme: 'blur',
            color: layoutColors.defaultText,
            dataProvider: $scope.data[$scope.year][$scope.month],
            valueAxes: [{
                axisAlpha: 0,
                position: 'left',
                title: 'Total Output',
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
                valueField: 'output'
            }],
            chartCursor: {
                categoryBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false
            },
            categoryField: 'product',
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