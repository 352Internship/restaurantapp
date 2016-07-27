'use strict';

(function(){

class ItemComponent {
  constructor($state, MenuItem, shoppingCart) {
    this.$state = $state;
    this.MenuItem = MenuItem;
    this.item = {};
    this.shoppingCart = shoppingCart;
  }


  $onInit() {
    var self = this;
    this.MenuItem.get({id: this.$state.params.itemId }, function(data) {
      // console.log(data);
      self.item = data;
    });
  }

  addToCart(item) {
    var shoppingCart = [];

    // Get cart from localStorage if it exists, if not create an empty cart
    if (localStorage.getItem('cart')) {
      shoppingCart = JSON.parse(localStorage.getItem('cart'));
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }

    //push item to cart and add to shopping cart
    shoppingCart.push(item);
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
  }
}

angular.module('served2App')
  .component('item', {
    templateUrl: 'app/item/item.html',
    controller: ItemComponent,
    controllerAs: 'Item'
  });

})();
