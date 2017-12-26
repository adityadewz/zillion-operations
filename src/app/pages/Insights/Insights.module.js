(function () {
  'use strict';

  angular.module('BlurAdmin.pages.Insights', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('Insights', {
          url: '/Insights',
          templateUrl: 'app/pages/Insights/Insights.html',
          title: 'Overall Insights',
          sidebarMeta: {
            icon: 'ion-android-apps',
            order: 100,
          },
        });
  }

})();