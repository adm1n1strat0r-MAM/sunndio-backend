const mongoose = require("mongoose");

const DiagSchema = new mongoose.Schema({
    diag_name : {
        type : String,
        required : true,
        unique : true
    }
});

const Diagnostic = new mongoose.model("diagnostic", DiagSchema);

module.exports = Diagnostic;