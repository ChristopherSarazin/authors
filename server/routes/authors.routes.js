const AuthorsController = require("../controllers/authors.controller");


module.exports = app => {
    app.get("/api", AuthorsController.helloworld);
    app.get("/api/authors", AuthorsController.findAllAuthors);
    app.post("/api/authors", AuthorsController.createNewAuthor);
    app.get("/api/authors/random", AuthorsController.findRandomAuthor);
    app.get("/api/authors/:id", AuthorsController.findOneAuthor);
    app.put("/api/authors/:id", AuthorsController.updateExistingAuthor);
    app.delete("/api/authors/:id", AuthorsController.deleteAuthor);

}