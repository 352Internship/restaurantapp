'use strict';

function shoppingCartController(shoppingCart) {
  this.shoppingCart = shoppingCart;
  this.cartCount = () => this.shoppingCart.getItems().length;
  console.log(this.cartCount());
}

angular.module('served2App')
  .component('shoppingCart', {
    template: `
      <button ui-sref="view-cart" type="button" class="btn btn-default btn-lg">
        <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Cart
        <span ng-if="!!ShoppingCart.cartCount()" class="badge">{{ShoppingCart.cartCount()}}</span>
      </button>
    `,
    controllerAs: 'ShoppingCart',
    controller: shoppingCartController
});
