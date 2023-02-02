const mongoose = require("mongoose");

// Define the mongoose Schema for assignResultSchema, it contained the painBehaviorId, painBehaviorQuestionId, and possibleDiagId
const assignResultSchema = new mongoose.Schema({
    DiagAnswer : {
        type : Boolean
    },
    Percentage : {
        type : Number
    },
    possibleDiagnosticId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PainPossibleDiagnotic"
    },
    painBehaviorId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PainBehavior'
    },
    painBehaviorQuestionId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PainBehaviorQuestion'
    }
});

// export the assignResult model
module.exports = mongoose.model("AssignResult", assignResultSchema);