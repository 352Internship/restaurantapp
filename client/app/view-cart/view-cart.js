'use strict';

angular.module('served2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view-cart', {
        url: '/view-cart',
        template: '<view-cart></view-cart>'
      });
  });
