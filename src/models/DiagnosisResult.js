const mongoose = require("mongoose");

// Define the mongoose Schema for DiagResultSchema, it contained the painBehaviorId
const diagResultSchema = mongoose.Schema({
    possibleDiagnosticId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PainPossibleDiagnotic"
    },
    painBehaviorId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PainBehavior'
    },
    DiagPercentage : {
        type : Number
    }
});

// export the diagResultSchema model
module.exports = mongoose.model("DiagnosisResult", diagResultSchema);