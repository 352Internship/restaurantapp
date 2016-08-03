'use strict';

function shoppingCartService() {
  this.items = JSON.parse(localStorage.getItem('cart'));

  this.addItem = (item, refEl) => {
    this.getItems();
    if (item) {
      this.items.push(item);
      localStorage.setItem('cart', JSON.stringify(this.items));

      var originalText = $(refEl.target).text();
      $(refEl.target).addClass('added');
      $(refEl.target).attr('disabled', 'disabled');
      $(refEl.target).html("<i class='glyphicon glyphicon-ok'></i>");

      setTimeout(function () {
        $(refEl.target).removeClass('added');
        $(refEl.target).removeAttr('disabled').html(originalText);
      }, 1250)

    }
  }

  this.getItems = () => {
    if (localStorage.getItem('cart')) {
      this.items = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.items = [];
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
    return this.items;
  }

  this.removeAll = () => {
    localStorage.setItem('cart', JSON.stringify([]));
  }
}

angular.module('served2App')
  .service('shoppingCart', shoppingCartService);
