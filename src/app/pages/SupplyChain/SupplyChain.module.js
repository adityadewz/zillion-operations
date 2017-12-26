(function () {
  'use strict';

  angular.module('BlurAdmin.pages.SupplyChain', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('SupplyChain', {
          url: '/SupplyChain',
          templateUrl: 'app/pages/SupplyChain/SupplyChain.html',
          title: 'Supply Chain',
          sidebarMeta: {
            icon: 'ion-android-apps',
            order: 100,
          },
        });
  }

})();