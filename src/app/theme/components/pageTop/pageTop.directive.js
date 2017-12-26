/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .directive('pageTop', pageTop);

    /** @ngInject */
    function pageTop() {
        return {
            restrict: 'E',
            templateUrl: 'app/theme/components/pageTop/pageTop.html',
            controller: ["$scope", "$uibModal", "baProgressModal", function($scope, $uibModal, baProgressModal) {

                $scope.open = function(page, size) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: page,
                        size: size,
                        resolve: {
                            items: function() {
                                return $scope.items;
                            }
                        }
                    });
                };

                $scope.viewAs = sessionStorage.viewAs;


                console.log(sessionStorage.viewAs)
                console.log(sessionStorage.isLogin)

                $scope.switchViewTo = function(type) {
                    if (type === "sales") {
                        sessionStorage.viewAs = "sales"
                        window.location.href = "/index.html"
                    } else if (type === "management") {
                        sessionStorage.viewAs = "management"
                        window.location.href = "/index.html"

                    } else {
                        console.log("Something not right!")
                    }
                }

            }]
        };
    }

})();