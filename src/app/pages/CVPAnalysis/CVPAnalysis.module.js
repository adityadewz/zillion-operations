(function () {
  'use strict';

  angular.module('BlurAdmin.pages.CVPAnalysis', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('CVPAnalysis', {
          url: '/CVPAnalysis',
          title: 'CVP Analysis',
          template:'<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          sidebarMeta: {
            icon: 'ion-arrow-graph-up-right',
            order: 100,
          },
        })
        .state('CVPAnalysis.newProduct', {
          url: '/newProduct',
          templateUrl: 'app/pages/CVPAnalysis/newProduct/newProduct.html',
          controller:"newProductCtrl",
          title: 'New Product',
          sidebarMeta: {
            order: 0,
            icon:"ion-plus-round"
          },
        })
         .state('CVPAnalysis.existProduct', {
          url: '/existProduct',
          templateUrl: 'app/pages/CVPAnalysis/existProduct/existProduct.html',
          controller:"existProductCtrl",
          title: 'Existing Product',
          sidebarMeta: {
            order: 0,
            icon:"ion-plus-round"
          },
        })
       
  }

})();