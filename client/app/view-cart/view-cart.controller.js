'use strict';

(function(){

class ViewCartComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('served2App')
  .component('viewCart', {
    templateUrl: 'app/view-cart/view-cart.html',
    controller: ViewCartComponent,
    controllerAs: 'viewCartCtrl'
  });

})();
