const express = require("express");
const router = express.Router();
const question = require("../models/question");
const csvtojson = require("csvtojson");

router.post("/importquestion", async (req, res) => {
    csvtojson()
    .fromFile("Book2.csv")
    .then(csvData =>{
        console.log(csvData);
        question.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});


router.post("/question", async (req, res) => {
    try{
        const addData = new question(req.body);
        const added = await addData.save();
        res.status(201).send(added);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/questions", async (req, res) => {
    try{
        const getData = await question.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/question/:id", async (req, res) => {
    try{
        const getData = await question.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/question/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updatequs = await question.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updatequs);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/question/:id", async (req, res) =>{
    try{
        const deleteques = await question.findByIdAndDelete(req.params.id);
        !deleteques ? res.status(400).send() : res.status(200).send(deleteques);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;