'use strict';

angular.module('served2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('item', {
        url: '/item/:itemId',
        template: '<item></item>'
      });
  });
