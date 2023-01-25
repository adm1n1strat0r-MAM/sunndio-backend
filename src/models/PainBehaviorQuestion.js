const mongoose = require("mongoose");

const PBQSchema = mongoose.Schema({
    painBehavior_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'PainBehavior'
    },
    question_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'question'
    }
});

module.exports = mongoose.model('PainBehaviorQuestion', PBQSchema);