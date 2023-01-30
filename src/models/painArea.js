const mongoose = require("mongoose");

// Define Mongoose Schema for painArea
const painAreaSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    IsLive : {
        type : Boolean
    }
});

// exports the painArea model
module.exports = mongoose.model("PainArea", painAreaSchema);