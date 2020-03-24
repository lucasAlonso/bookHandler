function getAuthor(req, res) {
    res.json(autores);
}

function getAuthorById(req, res) {
    let autorFinded = autores[req.indexAuthor];
    res.json(autorFinded);
}

function deleteAuthorById(req, res) {
    autores.splice(req.indexAuthor, 1);
    res.status(200).send('deleted');
}

function postAuthor(req, res) {
    let autor = req.body;
    autor.id = idCount;
    autores.push(autor);
    idCount++;

    res.status(201).send('autor Creado');
}

function putAuthor(req, res) {
    autores[req.indexAuthor].nombre = req.params.nombre;
    autores[req.indexAuthor].apellido = req.params.apellido;
    autores[req.indexAuthor].fechaDeNacimiento = req.params.fechaDeNacimiento;

    res.status(204).send('autor modificado');
}
module.exports = {
    getAuthor,
    getAuthorById,
    deleteAuthorById,
    postAuthor,
    putAuthor
};
