const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question : {
        type : String,
        required : true
    }
});

const question = new mongoose.model("question", questionSchema);

module.exports = question;
