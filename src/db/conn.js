const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/sunndio")
.then(() => {
    console.log("Database Connection is done...");
}).catch((err) => {
    console.log(err);
});