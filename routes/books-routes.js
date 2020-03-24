const express = require('express');
const middlewares = require('../middlewares/middleapp.js');
const booksController = require('../controllers/books.js');

const api = express.Router();

api.get('/:id/libros', middlewares.validarAutorbyId, booksController.getBooks);
api.get('/:id/libros/:idLibro', middlewares.validarAutorbyId, middlewares.validarIdLibro, booksController.getBookById);
api.post('/:id/libros', middlewares.validarAutorbyId, booksController.postBook);
api.put('/:id/libros/:idLibro', middlewares.validarAutorbyId, middlewares.validarIdLibro, booksController.putBook);
api.delete(
    '/:id/libros/:idLibro',
    middlewares.validarAutorbyId,
    middlewares.validarIdLibro,
    booksController.deleteBook
);

module.exports = api;
