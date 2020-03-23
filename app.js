const bodyParser = require('body-parser');
const express = require('express');
autores = [];
idCount = 1;

const app = express();

let author_routes = require('./routes/author-routes');
let books_routes = require('./routes/books-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/autores', author_routes);

module.exports = app;
