'use strict';

(function(){

class ViewCartComponent {

  constructor(Order, shoppingCart) {
    this.Order = Order;
    this.shoppingCart = shoppingCart;


    this.items = this.shoppingCart.getItems();
    console.log(this.items);

    // this.createOrder(this.items);
  }

  placeOrder(shoppingCart) {
    var newItems = [];
    for (var i = 0, len = shoppingCart.length; i < len; i++) {
      if (shoppingCart[i]) {
        newItems.push({
          menuItem: shoppingCart[i]._id,
          price: shoppingCart[i].price,
          discount: shoppingCart[i].discount
        });
      }
    }
    var newOrder = {
      items: newItems
    };
    if (newOrder) {
      this.Order
        .save(newOrder)
        .$promise
        .then(this.shoppingCart.removeAll())
        .catch(() => alert('Placing order failed.'));
    };
  }

  goBack() {
    history.back();
  }

}

angular.module('served2App')
  .component('viewCart', {
    templateUrl: 'app/view-cart/view-cart.html',
    controller: ViewCartComponent,
    controllerAs: 'ViewCart'
  });

})();
