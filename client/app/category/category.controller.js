'use strict';

(function(){

class CategoryComponent {
  constructor($state) {
    this.$state = $state;
  }
}

angular.module('served2App')
  .component('category', {
    templateUrl: 'app/category/category.html',
    controller: CategoryComponent,
    controllerAs: 'Category'
  });

})();
