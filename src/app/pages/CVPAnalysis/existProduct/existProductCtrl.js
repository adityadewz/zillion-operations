/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.CVPAnalysis')
        .controller('existProductCtrl', ["$scope", "baConfig", "$element", "layoutPaths", existProductCtrl]);

    /** @ngInject */
    function existProductCtrl($scope, baConfig, $element, layoutPaths) {
        console.log("m here")
        $scope.data = [{
            cateogary: "Enter Month",
            value: "January"
        }, {
            cateogary: "Units Sold in a particular month",
            value: "2000"
        }, {
            cateogary: "Selling Proce per unit",
            value: "€ 60"
        },  {
            cateogary: "Fixed Costs",
            value: "€ 2500"
        }, {
            cateogary: "Variable cost per unit",
            value: "-€ 3"
        }]

    }
})();