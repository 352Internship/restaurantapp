'use strict';

(function() {

  function CategoryResource($resource) {
    return $resource('/api/categories');
  }

  angular.module('served2App')
    .factory('Category', CategoryResource);
})();
