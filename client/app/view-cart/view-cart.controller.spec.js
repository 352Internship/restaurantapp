'use strict';

describe('Component: ViewCartComponent', function () {

  // load the controller's module
  beforeEach(module('served2App'));

  var ViewCartComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ViewCartComponent = $componentController('view-cart', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
