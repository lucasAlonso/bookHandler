function getBooks(req, res) {
    res.status(200).json(autores[req.indexAuthor].libros);
}

function getBookById(req, res) {
    res.status(200).json(autores[req.indexAuthor].libros[req.indexLibro]);
}
function postBook(req, res) {
    let libro = {};
    libro.titulo = req.body.titulo;
    libro.descripcion = req.body.descripcion;
    libro.anioPublicacion = req.body.anioPublicacion;
    libro.id = idBooks;
    idBooks++;
    autores[req.indexAuthor].libros.push(libro);
    res.status(201).send('libro Creado');
}
function putBook(req, res) {
    let libro = {};
    libro.titulo = req.body.titulo;
    libro.descripcion = req.body.descripcion;
    libro.anioPublicacion = req.body.anioPublicacion;
    autores[req.indexAuthor].libros[req.indexLibro] = libro;
    res.status(200).json(libro);
}
function deleteBook(req, res) {
    autores[req.indexAuthor].libros.splice(req.indexLibro, 1);
    res.status(204);
}

module.exports = {
    getBooks,
    postBook,
    getBookById,
    putBook,
    deleteBook
};
