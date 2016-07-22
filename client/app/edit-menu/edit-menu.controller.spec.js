'use strict';

describe('Component: EditMenuComponent', function () {

  // load the controller's module
  beforeEach(module('served2App'));

  var EditMenuComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EditMenuComponent = $componentController('edit-menu', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
