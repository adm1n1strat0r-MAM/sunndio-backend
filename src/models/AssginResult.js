const mongoose = require("mongoose");

const AResultSchema = new mongoose.Schema({
    DiagAnswer : {
        type : Boolean
    },
    Percentage : {
        type : Number
    },
    PossibleDiag_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PainPossibleDiagnotic"
    },
    painBehavior_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PainBehavior'
    },
    painBehaviorQuestion_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PainBehaviorQuestion'
    }
});

module.exports = mongoose.model("AssignResult", AResultSchema);