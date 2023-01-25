const mongoose = require("mongoose");

const DiagResultSchema = mongoose.Schema({
    PossibleDiag_id : {
        type : mongoose.Schema.Types.ObjectId
    },
    painBehavior_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PainBehavior'
    },
    DiagPercentage : {
        type : Number
    }
});

module.exports = mongoose.model("DiagnosisResult", DiagResultSchema);