'use strict';

(function(){

class EditMenuComponent {

  constructor(MenuItem) {
    this.MenuItem = MenuItem;
    this.menuItems = MenuItem.query();
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

  addMenuItem(newMenuItem) {
    if (newMenuItem) {
      this.MenuItem
        .save(newMenuItem)
        .$promise
        .then(item => this.menuItems.push(item))
        .then(() => this.newMenuItem = {} )
        .catch(() => alert('Adding menu item failed.'));
    }
  }

  editMenuItem(item) {
    if (item) {
      this.MenuItem
        .update(item)
        .$promise
        .then()
        .catch(() => alert('Editing menu item failed.'));
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
