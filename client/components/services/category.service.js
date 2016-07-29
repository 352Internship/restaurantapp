'use strict';

(function() {

  function CategoryResource($resource) {
    return $resource('/api/categories/:categoryId', {
      'categoryId': '@_id'
    },{
      'update': { method: 'PUT' }
    });
  }

  angular.module('served2App')
    .factory('Category', CategoryResource);
})();
