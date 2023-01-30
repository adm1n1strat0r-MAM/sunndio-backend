const express = require("express");
const router = express.Router();
const painBehaviorQuestion = require("../models/painBehaviorQuestion");
const question = require("../models/question");
const csvtojson = require("csvtojson");

router.post("/importBehaviorQuestion", async (req, res) => {
    csvtojson()
    .fromFile("Book1.csv")
    .then(csvData =>{
        console.log(csvData);
        painBehaviorQuestion.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});
router.get("/questionsByPainBehavior/:painBehaviorId", async (req, res) => {
    try{
        const Ques_id = await painBehaviorQuestion.find({
            painBehavior_id : req.params.painBehaviorId
        },{
            painBehavior_id : 0,
            _id : 0
        })
        .populate('question_id');
        const question_b = Ques_id.map(_question => _question.question_id);
        res.status(200).send(question_b);

    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;