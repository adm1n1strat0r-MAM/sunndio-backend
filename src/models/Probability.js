const mongoose = require("mongoose");

const probSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Probability", probSchema);