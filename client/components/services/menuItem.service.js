'use strict';

(function() {

  function MenuItemResource($resource) {
    return $resource('/api/menuItems/:id', {
      id: '@_id'
    });
  }

  angular.module('served2App')
    .factory('MenuItem', MenuItemResource);
})();
