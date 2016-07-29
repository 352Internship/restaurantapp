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

  goBack() {
    history.back();
  }
}

angular.module('served2App')
  .component('item', {
    templateUrl: 'app/item/item.html',
    controller: ItemComponent,
    controllerAs: 'Item'
  });

})();
