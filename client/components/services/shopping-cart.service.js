'use strict';

function shoppingCartService() {
  this.items = [];

  this.addItem = (item) => {
    console.log('addItem', item);
    this.items.push(item);
  }

  this.getItems = () => {
    console.log('getItems', this.items);
    return this.items;
  }
}

angular.module('served2App')
  .service('shoppingCart', shoppingCartService);
