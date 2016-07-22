'use strict';

var app = require('../..');
import request from 'supertest';

var newMenuItem;

describe('MenuItem API:', function() {

  describe('GET /api/menuItems', function() {
    var menuItems;

    beforeEach(function(done) {
      request(app)
        .get('/api/menuItems')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          menuItems = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(menuItems).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/menuItems', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/menuItems')
        .send({
          name: 'New MenuItem',
          info: 'This is the brand new menuItem!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMenuItem = res.body;
          done();
        });
    });

    it('should respond with the newly created menuItem', function() {
      expect(newMenuItem.name).to.equal('New MenuItem');
      expect(newMenuItem.info).to.equal('This is the brand new menuItem!!!');
    });

  });

  describe('GET /api/menuItems/:id', function() {
    var menuItem;

    beforeEach(function(done) {
      request(app)
        .get('/api/menuItems/' + newMenuItem._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          menuItem = res.body;
          done();
        });
    });

    afterEach(function() {
      menuItem = {};
    });

    it('should respond with the requested menuItem', function() {
      expect(menuItem.name).to.equal('New MenuItem');
      expect(menuItem.info).to.equal('This is the brand new menuItem!!!');
    });

  });

  describe('PUT /api/menuItems/:id', function() {
    var updatedMenuItem;

    beforeEach(function(done) {
      request(app)
        .put('/api/menuItems/' + newMenuItem._id)
        .send({
          name: 'Updated MenuItem',
          info: 'This is the updated menuItem!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMenuItem = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMenuItem = {};
    });

    it('should respond with the updated menuItem', function() {
      expect(updatedMenuItem.name).to.equal('Updated MenuItem');
      expect(updatedMenuItem.info).to.equal('This is the updated menuItem!!!');
    });

  });

  describe('DELETE /api/menuItems/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/menuItems/' + newMenuItem._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when menuItem does not exist', function(done) {
      request(app)
        .delete('/api/menuItems/' + newMenuItem._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
