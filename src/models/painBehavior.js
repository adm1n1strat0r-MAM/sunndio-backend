const mongoose = require("mongoose");

// Define the mongoose Schema for painBehavior, it contained the painDefinitionId
const painBehaviorSchema = new mongoose.Schema({
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

// export the painbehavior model
module.exports = mongoose.model("PainBehavior", painBehaviorSchema);