'use strict';

(function(){

class ItemComponent {
  constructor($state, MenuItem) {
    this.$state = $state;
    this.MenuItem = MenuItem;
    this.item = {};

    var cart = [];
    this.getShoppingCart(cart);
  }


  $onInit() {
    var self = this;
    this.MenuItem.get({id: this.$state.params.itemId }, function(data) {
      console.log(data);
      self.item = data;
    });
  }

  getShoppingCart(cart) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  addToCart(item) {
    this.cart.append(item);
    console.log("cart", this.cart);
  }
}

angular.module('served2App')
  .component('item', {
    templateUrl: 'app/item/item.html',
    controller: ItemComponent,
    controllerAs: 'Item'
  });

})();
