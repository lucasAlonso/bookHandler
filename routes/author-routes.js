const express = require('express');
const server = express.Router();
const middlewares = require('../middlewares/middleapp.js');
const authorController = require('../controllers/author.js');

module.exports = server;

server.get('/autores', middlewares.validarAutor, authorController.getAuthor);

server.get(
    '/autores/:id',
    middlewares.validarAutorId,
    authorControllers.getAuthorById
);

/* server.delete('/autores/:id', (req, res) => {
    let autorFinded = autores.find(
        autor => autor.id === parseInt(req.params.id)
    );
    let indexToDelete = autores.indexOf(autorFinded);

    autores.splice(indexToDelete, 1);
    res.status(200).send('deleted');
});
server.post('/autores', (req, res) => {
    let autor = req.body;
    autor.id = idCount;
    autores.push(autor);
    idCount++;

    res.status(200).send('autor Creado');
});
server.put('/autores/:id', (req, res) => {
    let autorFinded = autores.find(
        autor => autor.id === parseInt(req.params.id)
    );
    let indexToModif = autores.indexOf(autorFinded);
    autores[indexToModif].nombre = req.params.nombre;
    autores[indexToModif].apellido = req.params.apellido;
    autores[indexToModif].fechaDeNacimiento = req.params.fechaDeNacimiento;

    res.status(200).send('autor modificado');
}); */
