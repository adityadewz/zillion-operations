/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.CVPAnalysis')
        .controller('newProductCtrl', ["$scope", "baConfig", "$element", "layoutPaths", newProductCtrl]);

    /** @ngInject */
    function newProductCtrl($scope, baConfig, $element, layoutPaths) {

        $(".editable-has-buttons.editable-input").blur(function()
        {
            $(this).css("color","#000")
        })

        $scope.FixedCostItems = [{
            cateogary: "Marketing",
            cost: "600"
        }, {
            cateogary: "Manufacturing",
            cost: "3000"
        }, {
            cateogary: "Inventory",
            cost: "100"
        },  {
            cateogary: "Rent",
            cost: "564"
        }, {
            cateogary: "Taxes(real estate,etc)",
            cost: "5000"
        },
        {
            cateogary: "Total Fixed Cost",
            cost: "9264"
        }]

        $scope.VariableCostItem=[
        {
            cateogary: "Cost of units sold",
            cost: "65"
        },
        {
            cateogary: "Direct Labor",
            cost: "50"
        },
        {
            cateogary: "Total variable cost",
            cost: "115"
        }]

        $scope.BreakEvenPoints=[
        {
            cateogary: "Break Even Units",
            cost: "265"
        },
        {
            cateogary: "Break Even Sales",
            cost: "39703"
        }
        ]
        $scope.SalesVolume=[
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Jan-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Feb-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Mar-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Apr-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"May-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"June-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Jul-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Aug-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Sep-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Oct-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Nov-11"
            },
            {
                tc:32264,
                tr:30000,
                pr:2264,
                month:"Dec-11"
            }
        ]


    }
})();