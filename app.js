const bodyParser = require('body-parser');
const express = require('express');
const server = express();

autores = [];
idCount = 1;

server.use(bodyParser.json());
server.listen(3000, () => {
    console.log('spreading Coronavirus...');
});
server.get('/autores', (req, res) => {
    res.json(autores);
});
server.get('/autores/:id', (req, res) => {
    let autorFinded = autores.find(
        autor => autor.id === parseInt(req.params.id)
    );

    res.json(autorFinded);
});
server.delete('/autores/:id', (req, res) => {
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
});
