'use strict';

angular.module('served2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('order', {
        url: '/order',
        template: '<order></order>'
      });
  });
