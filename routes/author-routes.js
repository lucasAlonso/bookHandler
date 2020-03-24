const express = require('express');
const middlewares = require('../middlewares/middleapp.js');
const authorController = require('../controllers/author.js');

const api = express.Router();

api.get('/', authorController.getAuthor);
api.get('/:id', middlewares.validarAutorbyId, authorController.getAuthorById);
api.delete('/:id', middlewares.validarAutorbyId, authorController.deleteAuthorById);
api.post('/', middlewares.validarPostAutor, authorController.postAuthor);
api.put('/', middlewares.validarAutorbyId, authorController.putAuthor);

module.exports = api;
