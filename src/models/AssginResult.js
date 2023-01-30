const mongoose = require("mongoose");

// Define the mongoose Schema for assignResultSchema, it contained the painBehaviorId, painBehaviorQuestionId, and possibleDiagId
const assignResultSchema = new mongoose.Schema({
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

// export the assignResult model
module.exports = mongoose.model("AssignResult", assignResultSchema);