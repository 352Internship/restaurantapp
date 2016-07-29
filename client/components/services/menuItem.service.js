'use strict';

(function() {

  function MenuItemResource($resource) {
    return $resource('/api/menuItems/:id', {
      id: '@_id'
    }, {
      update: { method: 'PUT' },
      getAllByCategoryId: {
        method:'GET',
        params: {
          categoryId: '@categoryId'
        },
        url: '/api/menuItems/category/:categoryId',
        isArray: true
      }
    });
  }

  angular.module('served2App')
    .factory('MenuItem', MenuItemResource);
})();
