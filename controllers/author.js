function getAuthor(req, res) {
    res.json(autores);
}

function getAuthorById(req, res) {
    let autorFinded = autores.find(autor => autor.id === parseInt(req.params.id));

    res.json(autorFinded);
}

function deleteAuthorById(req, res) {
    let autorFinded = autores.find(autor => autor.id === parseInt(req.params.id));
    let indexToDelete = autores.indexOf(autorFinded);

    autores.splice(indexToDelete, 1);
    res.status(200).send('deleted');
}

module.exports = {
    getAuthor,
    getAuthorById,
    deleteAuthorById
};
