(function () {
  'use strict';

  angular.module('BlurAdmin.pages.YOYTrends', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('YOYTrends', {
          url: '/YOYTrends',
          templateUrl: 'app/pages/YOYTrends/YOYTrends.html',
          title: 'YOY Trends',
          sidebarMeta: {
            icon: 'ion-android-apps',
            order: 100,
          },
        });
  }

})();