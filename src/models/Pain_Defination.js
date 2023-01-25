const mongoose = require("mongoose");

const PD_Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    PainArea_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PainArea'
    }
});

const Pain_Definiton = new mongoose.model("PainDefinition", PD_Schema);

module.exports = Pain_Definiton;