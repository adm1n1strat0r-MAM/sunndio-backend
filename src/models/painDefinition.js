const mongoose = require("mongoose");

// Define Mongoose Schema for painDefinition, it contained the painAreaId.
const painDefinitionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    painAreaId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PainArea'
    }
});

// export painDefinition model
module.exports = mongoose.model("PainDefinition", painDefinitionSchema);