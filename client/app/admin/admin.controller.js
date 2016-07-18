'use strict';

(function() {

  class AdminController {
    constructor(User, MenuItem) {
      // Use the User $resource to fetch all users
      // Use the MenuItem $resource to fetch all menuItems
      this.users = User.query();
      this.menuItems = MenuItem.query();
    }

    deleteUser(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }

    deleteMenuItem(menuItem) {
      console.log(menuItem);
      menuItem.$remove();
      this.menuItems.splice(this.menuItems.indexOf(menuItem), 1);
    }
  }

  angular.module('served2App.auth')
    .controller('AdminController', AdminController);
})();
