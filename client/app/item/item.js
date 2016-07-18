'use strict';

angular.module('served2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('item', {
        url: '/item',
        template: '<item></item>'
      });
  });
