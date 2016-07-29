'use strict';

(function(){

class EditCategoryComponent {

  constructor(Category) {
    this.categoryService = Category;
    this.categories = Category.query();
  }

  deleteCategory(category) {
    category
      .$remove()
      .then(() => {
        this.categories.splice(this.categories.indexOf(category), 1);
      })
      .catch(error => {
        alert('Delete failed.');
        console.error(error);
      });
  }

  addCategory(newCategory) {
    if (newCategory) {
      this.categoryService
        .save(newCategory)
        .$promise
        .then(item => this.categories.push(item))
        .then(() => this.newCategory = {} )
        .catch(() => alert('Adding Category failed.'));
    }
  }

  editCategoryItem(item) {
    if (item) {
      this.categoryService
        .update(item)
        .$promise
        .then()
        .catch(() => alert('Editing Category failed.'));
    }
  }
}

angular.module('served2App')
  .component('editCategory', {
    templateUrl: 'app/edit-category/edit-category.html',
    controller: EditCategoryComponent,
    controllerAs: 'EditCategory'
  });

})();
