'use strict';

(function() {

  function OrderResource($resource) {
    return $resource('/api/orders/:orderId', {
      'orderId': '@_id'
    },{
      'update': { method: 'PUT' }
    });
  }

  angular.module('served2App')
    .factory('Order', OrderResource);
})();
