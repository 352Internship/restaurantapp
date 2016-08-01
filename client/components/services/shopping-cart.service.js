'use strict';

function shoppingCartService() {
  this.items = JSON.parse(localStorage.getItem('cart'));

  this.addItem = (item) => {
    this.getItems();
    if (item) {
      this.items.push(item);
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }

  this.getItems = () => {
    if (localStorage.getItem('cart')) {
      this.items = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.items = [];
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
    console.log('getItems', this.items);
    return this.items;
  }
}

angular.module('served2App')
  .service('shoppingCart', shoppingCartService);
