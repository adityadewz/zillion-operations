/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('dashboardChart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", dashboardChart1Ctrl]);

    /** @ngInject */
    function dashboardChart1Ctrl($scope, baConfig, $element, layoutPaths) {
        console.log($scope.showBy)

        $scope.viewByChart1 = "chart"


        var layoutColors = baConfig.colors;
        console.log(layoutColors)
            // var id = $element[0].getAttribute('id');
        $scope.viewBy = "chart"
        var id = "barChart";
        $scope.data = [{
            country: 'John',
            Target: 4,
            color: layoutColors.infoDark
        }, {
            country: 'Mark',
            Target: 6,
            color: layoutColors.danger

        }, {
            country: 'Whitney',
            Target: 8,
            color: layoutColors.info
        }, {
            country: 'Donald',
            Target: 3,
            color: layoutColors.success
        }]
        var barChart = AmCharts.makeChart(id, {
            type: 'serial',
            theme: 'blur',
            color: layoutColors.defaultText,
            dataProvider: $scope.data,
            valueAxes: [{
                axisAlpha: 0,
                position: 'left',
                title: 'Target',
                gridAlpha: 0.5,
                gridColor: "#fff",
                "color": "#fff",
                "titleColor":"#fff",
                "titleBold":false            }],
            startDuration: 1,
            graphs: [{
                balloonText: '<b>[[category]]: [[value]]</b>',
                fillColorsField: 'color',
                fillAlphas: 0.7,
                lineAlpha: 0.2,
                type: 'column',
                valueField: 'Target'
            }],
            chartCursor: {
                categoryBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false
            },
            categoryField: 'country',
            categoryAxis: {
                gridPosition: 'start',
                labelRotation: 45,
                gridAlpha: 0.5,
                gridColor: "#fff",
                color: "#fff",
                aixsColor: "#fff",
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