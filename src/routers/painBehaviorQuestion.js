const express = require("express");
const router = express.Router();
const painBehaviorQuestion = require("../models/painBehaviorQuestion");
const question = require("../models/question");

// get the question form the MongoDB by painBehaviorId
router.get("/questionsByPainBehavior/:painBehaviorId", async (req, res) => {
  try {
    // get the questionsIDs from the bridge using papulate method 
    const questionIDs = await painBehaviorQuestion
      .find(
        {
          painBehavior_id: req.params.painBehaviorId,
        },
        {
          painBehavior_id: 0,
          _id: 0,
        }
      )
      .populate("question_id");
    // get the questions using map mathod from the papulated array
    const questions = Ques_id.map((_question) => _question.question_id);
    res.status(200).send(questions);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
