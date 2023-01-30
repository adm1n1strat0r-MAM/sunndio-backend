const mongoose = require("mongoose");

// Define the mongoose Schema for question
const questionSchema = new mongoose.Schema({
    question : {
        type : String,
        required : true
    }
});

//export the question model
module.exports = mongoose.model("question", questionSchema);;
