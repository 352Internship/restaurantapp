'use strict';

(function(){

class ItemComponent {
  constructor($state, MenuItem) {
    this.$state = $state;
    this.MenuItem = MenuItem;
    this.item = {};

    var cart = [];
  }


  $onInit() {
    var self = this;
    this.MenuItem.get({id: this.$state.params.itemId }, function(data) {
      // console.log(data);
      self.item = data;
    });
  }

  addToCart(item) {
    console.log('clicked');

    var shoppingCart = [];


    if (localStorage.getItem('cart')) {
      shoppingCart = JSON.parse(localStorage.getItem('cart'));
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    console.log('cart', shoppingCart);

    shoppingCart.push(item);
    localStorage.setItem('cart', JSON.stringify(shoppingCart));


    console.log('cart', shoppingCart);
  }
}

angular.module('served2App')
  .component('item', {
    templateUrl: 'app/item/item.html',
    controller: ItemComponent,
    controllerAs: 'Item'
  });

})();
