const mongoose = require("mongoose");

// Define the mongoose Schema for probability, it contained the painBehaviorId
const probabilitySchema = new mongoose.Schema({
    possible: {
        type : Number,
    },
    probability : {
        type : Number
    },
    total : {
        type : Number
    },
    painBehavior_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Pain_Behavior"
    }
});

//
module.exports = mongoose.model("Probability", probabilitySchema);