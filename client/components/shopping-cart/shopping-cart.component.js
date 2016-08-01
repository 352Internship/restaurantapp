'use strict';

function shoppingCartController(shoppingCart) {
  this.shoppingCart = shoppingCart;
  this.cartCount = () => this.shoppingCart.getItems().length;
}

angular.module('served2App')
  .component('shoppingCart', {
    template: `
      <button ui-sref="view-cart" type="button" class="btn btn-default btn-lg">
        <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Cart
        <span ng-if="!!ShoppingCart.cartCount()" class="badge">{{CrtCtrl.cartCount()}}</span>
      </button>
    `,
    controllerAs: 'ShoppingCart',
    controller: shoppingCartController
});
