'use strict';

angular.module('served2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: '/category/:categoryId',
        template: '<category></ category>'
      });
  });
