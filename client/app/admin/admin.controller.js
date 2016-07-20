'use strict';

(function() {

  class AdminController {
    constructor(User, MenuItem, $http) {
      // Use the User $resource to fetch all users
      // Use the MenuItem $resource to fetch all menuItems
      this.users = User.query();
      this.menuItems = MenuItem.query();

      this.$http = $http;

      this.newMenuItem = '';
      // this.oldMenuItem = '';
    }

    deleteUser(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }

    deleteMenuItem(menuItem) {
      this.$http.delete('/api/menuItems/' + menuItem._id);
      this.menuItems.splice(this.menuItems.indexOf(menuItem), 1);
    }

    addMenuItem() {
      if (this.newMenuItem) {
        this.$http.post('/api/menuItems', this.newMenuItem);
        this.menuItems.push(this.newMenuItem);
        this.newMenuItem = '';
      }
    }

    editMenuItem(item) {
      console.log(item);
      if (item) {
        this.$http.put('/api/menuItems/' + item._id, item);
        this.menuItems.splice(this.menuItems.indexOf(item), 1, item)
      }
    }

  }

  angular.module('served2App.auth')
  .controller('AdminController', AdminController);
})();
