function getAuthor(req, res) {
    res.json(autores);
}
function getAuthorById(req, res) {
    let autorFinded = autores.find(
        autor => autor.id === parseInt(req.params.id)
    );

    res.json(autorFinded);
}
