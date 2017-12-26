/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';
    var dependencies=[
            'ui.router',
            'BlurAdmin.pages.dashboard',
            'BlurAdmin.pages.SupplyChain' ,
            'BlurAdmin.pages.CustomerPerformance',
            'BlurAdmin.pages.Insights'      
        ]

    angular.module('BlurAdmin.pages', dependencies)
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('/dashboard');

    
    }

})();