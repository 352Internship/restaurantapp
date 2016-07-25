'use strict';

(function(){

class CategoryComponent {
  constructor($state, Category) {
    this.$state = $state;
    this.Category = Category;
  }


  $onInit() {
    this.Category.get({categoryId: this.$state.params.categoryId }, function(data) {
      console.log(data);
    });
  }
}

angular.module('served2App')
  .component('category', {
    templateUrl: 'app/category/category.html',
    controller: CategoryComponent,
    controllerAs: 'Category'
  });

})();
