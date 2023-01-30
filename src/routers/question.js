const express = require("express");
const router = express.Router();
const question = require("../models/question");

// insert questions into the to MonogoDB
router.post("/question", async (req, res) => {
    try{
        const addData = new question(req.body);
        const added = await addData.save();
        res.status(201).send(added);
    }catch(err){
        res.status(404).send(err);
    }
});
//get all questions from the MonogoDB
router.get("/questions", async (req, res) => {
    try{
        const getData = await question.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
//get question by Id
router.get("/question/:id", async (req, res) => {
    try{
        const getData = await question.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// update question by id
router.patch("/question/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const updateDate = await question.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateDate);
    }catch(err){
        res.status(404).send(err);
    }
});
// delete question by id
router.delete("/question/:id", async (req, res) =>{
    try{
        const deleteData = await question.findByIdAndDelete(req.params.id);
        !deleteData ? res.status(400).send() : res.status(200).send(deleteData);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;