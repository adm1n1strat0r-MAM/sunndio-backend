const express = require("express");
const router = express.Router();
const painBehaviorQuestion = require("../models/PainBehaviorQuestion");
const question = require("../models/Question");
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

router.post("/BehaviorQuestion", async (req, res) => {
    try{
        const addPB = new painBehaviorQuestion(req.body);
        const add = await addPB.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/BehaviorQuestion/:id", async (req, res) => {
    try{
        const Ques_id = await painBehaviorQuestion.find({painBehavior_id : req.params.id}, {question_id :1, _id :0});
        console.log(Ques_id);
        const ques = await question.find();
        res.status(200).send(ques);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/BehaviorQuestion/:id", async (req, res) => {
    try{
        const getData = await painBehaviorQuestion.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/BehaviorQuestion/:name", async (req, res) => {
    try{
        const nam = req.params.name;
        const getData = await painBehaviorQuestion.find({name:nam});
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/BehaviorQuestion/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updatePBQ = await painBehaviorQuestion.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updatePBQ);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/BehaviorQuestion/:id", async (req, res) =>{
    try{
        const deletePBQ = await painBehaviorQuestion.findByIdAndDelete(req.params.id);
        !deletePBQ ? res.status(400).send() : res.status(200).send(deletePBQ);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;