const mongoose = require("mongoose");

const PA_Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    IsLive : {
        type : Boolean
    }
});

module.exports = mongoose.model("PainArea", PA_Schema);