'use strict';

(function(){

class ViewCartComponent {

  constructor(Order, shoppingCart) {
    this.Order = Order;
    this.shoppingCart = shoppingCart;

    this.orders = this.Order.query();
    console.log(this.orders.length);

    this.items = this.shoppingCart.getItems();
    console.log(this.items);

    // this.createOrder(this.items);
  }

  placeOrder(shoppingCart) {
    var newItems = [];
    var subtotal = 0;
    for (var i = 0, len = shoppingCart.length; i < len; i++) {
      if (shoppingCart[i]) {
        newItems.push({
          menuItem: shoppingCart[i]._id,
          price: shoppingCart[i].price,
          discount: shoppingCart[i].discount
        });
        subtotal = subtotal + (shoppingCart[i].price - (shoppingCart[i].discount || 0));
      }
    }
    var newOrder = {
      items: newItems,
      totalPrice: subtotal
    };
    var confirm = window.confirm("Your total is $"+ subtotal.toFixed(2));
    if (confirm == true) {
      if (newOrder) {
        this.Order
          .save(newOrder)
          .$promise
          .then(window.alert("You are order number " + this.orders.length%20))
          .then(this.shoppingCart.removeAll())
          .catch(() => alert('Placing order failed.'));
      };
      this.items = this.shoppingCart.getItems();
    } else {
        //
    }

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
