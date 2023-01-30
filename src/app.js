const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const PORT = config.PORT;
require("./config/db");

const painAreaRouting = require("./routers/painArea");
const painDefinitionRouting = require("./routers/painDefinition");
const painBehaviorRouting = require("./routers/painBehavior");
const questionRouting = require("./routers/question");
const diagnosticsRouting = require("./routers/diagnostics");
const painBehaviorQuestionRouting = require("./routers/painBehaviorQuestion");
const painPossibleQuestionRouting = require("./routers/painPossibleDiagnotics");
const ProbabilityRouting = require("./routers/probability");
const AssignResultRouting = require("./routers/assginResult");
const DiagResultRouting = require("./routers/daignonsisResult");

const app = express();

app.use(express.json());
app.use([
  painAreaRouting,
  painDefinitionRouting,
  painBehaviorRouting,
  questionRouting,
  diagnosticsRouting,
  painBehaviorQuestionRouting,
  painPossibleQuestionRouting,
  ProbabilityRouting,
  AssignResultRouting,
  DiagResultRouting,
]);

app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`);
});
