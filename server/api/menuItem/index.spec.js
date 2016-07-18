'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var menuItemCtrlStub = {
  index: 'menuItemCtrl.index',
  show: 'menuItemCtrl.show',
  create: 'menuItemCtrl.create',
  update: 'menuItemCtrl.update',
  destroy: 'menuItemCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var menuItemIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './menuItem.controller': menuItemCtrlStub
});

describe('MenuItem API Router:', function() {

  it('should return an express router instance', function() {
    expect(menuItemIndex).to.equal(routerStub);
  });

  describe('GET /api/menuItems', function() {

    it('should route to menuItem.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'menuItemCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/menuItems/:id', function() {

    it('should route to menuItem.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'menuItemCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/menuItems', function() {

    it('should route to menuItem.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'menuItemCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/menuItems/:id', function() {

    it('should route to menuItem.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'menuItemCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/menuItems/:id', function() {

    it('should route to menuItem.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'menuItemCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/menuItems/:id', function() {

    it('should route to menuItem.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'menuItemCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
