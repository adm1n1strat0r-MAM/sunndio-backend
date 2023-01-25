const mongoose = require("mongoose");

const PPDSchema = new mongoose.Schema({
    Diagnostics_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "diagnostic"
    },
    painBehavior_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Pain_Behavior"
    },
    IsPossibleDiag : {
        type : Boolean
    }
});

module.exports = mongoose.model("PainPossibleDiagnotic", PPDSchema);;