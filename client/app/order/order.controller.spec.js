'use strict';

describe('Component: OrderComponent', function () {

  // load the controller's module
  beforeEach(module('served2App'));

  var OrderComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    OrderComponent = $componentController('order', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
