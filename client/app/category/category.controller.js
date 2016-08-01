'use strict';

(function(){

class CategoryComponent {
  constructor($state, Category, MenuItem) {
    this.$state = $state;
    this.Category = Category;
    this.MenuItem = MenuItem;
    this.menuItems = [];
    this.currentCategory = {};
  }


  $onInit() {
    const categoryId = this.$state.params.categoryId;
    if (categoryId) {

      // Fetch all menu items for a category
      this.MenuItem
        .getAllByCategoryId({categoryId})
        .$promise
        .then(res => this.menuItems = res)
        .catch(error => {
          alert('Failed to load menu items.');
          console.error(error);
        });

      // Retrieve category information
      this.Category
        .get({categoryId})
        .$promise
        .then(res => this.currentCategory = res)
        .catch(error => {
          alert('Failed to load category data.');
          console.error(error);
        });

    } else {
      this.$state.go('main');
    }
  }
}

angular.module('served2App')
  .component('category', {
    templateUrl: 'app/category/category.html',
    controller: CategoryComponent,
    controllerAs: 'Category'
  });

})();
