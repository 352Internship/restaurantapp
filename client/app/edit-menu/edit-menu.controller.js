'use strict';

(function(){

class EditMenuComponent {

  constructor(MenuItem, $http) {
    this.menuItem = MenuItem;
    this.menuItems = MenuItem.query();

    this.$http = $http;

    this.newMenuItem = '';
  }

  deleteMenuItem(menuItem) {
    menuItem
      .$remove()
      .then(() => {
        this.menuItems.splice(this.menuItems.indexOf(menuItem), 1);
      })
      .catch(error => {
        alert('Delete failed.');
        console.error(error);
      });
  }

  addMenuItem() {
    if (this.newMenuItem) {
      this.menuItem
        .save(this.newMenuItem)
        .$promise
        .then(item => this.menuItems.push(item))
        .then(() => this.newMenuItem = {} )
        .catch(() => alert('Adding menu item failed.'));
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

angular.module('served2App')
  .component('editMenu', {
    templateUrl: 'app/edit-menu/edit-menu.html',
    controller: EditMenuComponent,
    controllerAs: 'EditMenu'
  });

})();
