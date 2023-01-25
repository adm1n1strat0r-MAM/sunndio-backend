const express = require("express");
require("./db/conn");
const PArouting = require("./routers/Pain_Area_router");
const PDrouting = require("./routers/Pain_Definition_router");
const PBrouting = require("./routers/Pain_Behavior_router");
const QuesRouting = require("./routers/question_router");
const Diagrouting = require("./routers/Diagnostics_router");
const PBQrouting = require("./routers/PainBehaviorQuestion_router");
const PPDrouting = require("./routers/PainPossibleDiagnotics_router");
const Probrouting = require("./routers/Probability_router");
const AssignResultrouting = require("./routers/AssginResult_router");
const DiagResultrouting = require("./routers/DaignonsisResult_router");

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use([PArouting, PDrouting, PBrouting, QuesRouting, Diagrouting, PBQrouting, PPDrouting, Probrouting, AssignResultrouting, DiagResultrouting]);


app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})
