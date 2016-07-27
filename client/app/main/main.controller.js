'use strict';

(function() {

  class MainController {

    constructor($http, Category) {
      this.$http = $http;
      this.Category = Category;
      this.categories = [];

      // get current cart from local storage, if there isn't one, create an empty cart
      var cart = [];
      this.getShoppingCart(cart);
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
        });

      this.Category.query(r => this.categories = r );
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }

    getShoppingCart(cart) {
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  angular.module('served2App')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
