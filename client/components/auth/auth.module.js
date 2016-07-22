'use strict';

angular.module('served2App.auth', ['served2App.constants', 'served2App.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
