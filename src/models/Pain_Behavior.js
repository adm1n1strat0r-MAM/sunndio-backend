const mongoose = require("mongoose");

const PB_Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    PainDefinition_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PainDefinition"
    }
});

const Pain_Behavior = mongoose.model("PainBehavior", PB_Schema);

module.exports = Pain_Behavior;