'use strict';

(function() {

  function CategoryResource($resource) {
    return $resource('/api/categories/:categoryId', {
      'categoryId': '@_id'
    });
  }

  angular.module('served2App')
    .factory('Category', CategoryResource);
})();
