const Authors = require("../models/authors.model");



module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello authors with mongoose modularized!!!" });
}

module.exports.findAllAuthors = (req, res) => {
    Authors.find()
        .then(allAuthors => {
            res.json({ results: allAuthors })
        })
        .catch(err => {
            res.json({ err: err })
        })
}


module.exports.createNewAuthor = (req, res) => {
    Authors.create(req.body)
        .then(newAuthorsObj => {
            res.json({ results: newAuthorsObj })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findOneAuthor = (req, res) => {
    console.log("trying to find a Author")
    console.log(req.params.id)
    Authors.findOne({ _id: req.params.id })
        .then(foundAuthors => {
            res.json({ results: foundAuthors })
        })
        .catch(err => {
            res.json({ err: err })
        })
}


module.exports.updateExistingAuthor = (req, res) => {
    Authors.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedAuthor => {
            res.json({ results: updatedAuthor })
        })
        .catch(err => {
            res.json({ err: err })
        })

}

module.exports.deleteAuthor = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => {
            res.json({ results: deletedAuthor})
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findRandomAuthor = (req, res) => {
    console.log("trying to find random Author")
    Authors.find()
        .then(allAuthors => {
            console.log("all Authors looks like this")
            let lengthOfAllAuthors = allAuthors.length;


            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let randomIndex = getRandomInt(lengthOfAllAuthors)

            console.log(allAuthors[randomIndex])
            res.json({ results: allAuthors[randomIndex] })
        })
        .catch(err => {
            res.json({ err: err })
        })
}