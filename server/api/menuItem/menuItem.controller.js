/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/menuItems              ->  index
 * POST    /api/menuItems              ->  create
 * GET     /api/menuItems/:id          ->  show
 * PUT     /api/menuItems/:id          ->  update
 * DELETE  /api/menuItems/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import MenuItem from './menuItem.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of MenuItems
export function index(req, res) {
  return MenuItem.find({active: true}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single MenuItem from the DB
export function show(req, res) {
  return MenuItem.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new MenuItem in the DB
export function create(req, res) {
  return MenuItem.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing MenuItem in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  if (req.body.__v) {
    delete req.body.__v;
  }

  return MenuItem.findOneAndUpdate({_id: req.params.id},req.body,{upsert: true}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a MenuItem from the DB
export function destroy(req, res) {
  return MenuItem.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Gets all MenuItems by their Category Id
export function findByCategory(req, res) {
  return MenuItem.find({
    category: req.params.categoryId,
    active: true
  }).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}
