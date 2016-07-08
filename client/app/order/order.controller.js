'use strict';

(function(){

class OrderComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('served2App')
  .component('order', {
    templateUrl: 'app/order/order.html',
    controller: OrderComponent,
    controllerAs: 'Order'
  });

})();
