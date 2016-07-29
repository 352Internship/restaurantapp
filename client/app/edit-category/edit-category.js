'use strict';

angular.module('served2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editCategory', {
        url: '/admin/edit-category',
        template: '<edit-category></edit-category>',
        authenticate: 'admin'
      });
  });
