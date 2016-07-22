'use strict';

(function() {

  function MenuItemResource($resource) {
    return $resource('/api/menuItems/:id', {
      id: '@_id'
    }, {
      'update': { method: 'PUT' }
    });
  }

  angular.module('served2App')
    .factory('MenuItem', MenuItemResource);
})();
