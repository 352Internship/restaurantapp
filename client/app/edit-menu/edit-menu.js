'use strict';

angular.module('served2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editMenu', {
        url: '/admin/edit-menu',
        template: '<edit-menu></edit-menu>',
        authenticate: 'admin'
      });
  });
