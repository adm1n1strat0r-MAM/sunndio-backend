const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
require("./config/db");


const PArouting = require("./routers/painArea");
const PDrouting = require("./routers/painDefinition");
const PBrouting = require("./routers/painBehavior");
const QuesRouting = require("./routers/question");
const Diagrouting = require("./routers/diagnostics");
const PBQrouting = require("./routers/painBehaviorQuestion");
const PPDrouting = require("./routers/painPossibleDiagnotics");
const Probrouting = require("./routers/probability");
const AssignResultrouting = require("./routers/assginResult");
const DiagResultrouting = require("./routers/daignonsisResult");

const app = express();

app.use(express.json());
app.use([PArouting, PDrouting, PBrouting, QuesRouting, Diagrouting, PBQrouting, PPDrouting, Probrouting, AssignResultrouting, DiagResultrouting]);


app.listen(config.PORT, () => {
    console.log(`Server is running at port no ${config.PORT}`);
})
