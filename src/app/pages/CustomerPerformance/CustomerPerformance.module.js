(function () {
  'use strict';

  angular.module('BlurAdmin.pages.CustomerPerformance', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('CustomerPerformance', {
          url: '/CustomerPerformance',
          templateUrl: 'app/pages/CustomerPerformance/CustomerPerformance.html',
          title: 'Customer Insights',
          sidebarMeta: {
            icon: 'ion-android-apps',
            order: 100,
          },
        });
  }

})();