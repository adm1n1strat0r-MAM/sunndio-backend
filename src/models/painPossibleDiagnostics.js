const mongoose = require("mongoose");

// Define the mongoose Schema for painPossibleDiagnostic, it contained the painBehaviorId, diagnosticsId
const painPossibleDiagnosticSchema = new mongoose.Schema({
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

// export the painPossibleDiagnostic model
module.exports = mongoose.model("PainPossibleDiagnotic", painPossibleDiagnosticSchema);;