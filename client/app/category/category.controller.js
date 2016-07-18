'use strict';

(function(){

class CategoryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('served2App')
  .component('category', {
    templateUrl: 'app/category/category.html',
    controller: CategoryComponent,
    controllerAs: 'Category'
  });

})();
