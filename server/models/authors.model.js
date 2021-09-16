const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required:[true, "First Name is required!"],
        minlength: [2, "First Name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required:[true, "Last Name is required!"],
        minlength: [2, "Last Name must be at least 2 characters long"]
    }

})

const Authors = mongoose.model("Authors", AuthorsSchema)



module.exports = Authors;