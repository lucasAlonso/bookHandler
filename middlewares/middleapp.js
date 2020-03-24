function validarAutorbyId(req, res, next) {
    let autorFinded = autores.find(autor => autor.id === parseInt(req.params.id));
    if (autorFinded) {
        req.indexAuthor = autores.indexOf(autorFinded);
        next();
    } else {
        res.status(404).send('Autor no encontrado');
    }
}

function validarPostAutor(req, res, next) {
    let findNombre = autores.find(autor => autor.nombre === req.body.nombre);
    let findApellido = autores.find(autor => autor.apellido === req.body.apellido);
    if (findNombre && findApellido) {
        res.status(409).send('Autor Existente');
    } else {
        next();
    }
}

function validarIdLibro(req, res, next) {
    let libroFinded = autores[req.indexAuthor].libros.find(libro => libro.id === parseInt(req.params.idLibro));
    if (libroFinded) {
        req.indexLibro = autores[req.indexAuthor].libros.indexOf(libroFinded);
        next();
    } else {
        res.status(404).send('libro no encontrado');
    }
}

module.exports = {
    validarAutorbyId,
    validarPostAutor,
    validarIdLibro
};
