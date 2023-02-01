const express = require("express");
const router = express.Router();
const painBehaviorQuestion = require("../models/painBehaviorQuestion");

// get the question form the MongoDB by painBehaviorId
router.get("/questionsByPainBehavior/:painBehaviorId", async (req, res) => {
  try {
    // get the questionsIDs from the bridge using papulate method 
    const questionIDs = await painBehaviorQuestion
      .find(
        {
          painBehaviorId: req.params.painBehaviorId,
        },
        {
          painBehaviorId: 0,
          _id: 0,
        }
      )
      .populate("questionId");
    // get the questions using map mathod from the papulated array
    const questions = questionIDs.map((_question) => _question.questionId);
    res.status(200).send(questions);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
