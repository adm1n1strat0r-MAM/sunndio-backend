const express = require("express");
const router = express.Router();
const question = require("../models/Question");
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
        const addPD = new question(req.body);
        const add = await addPD.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/question", async (req, res) => {
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
router.get("/question/:name", async (req, res) => {
    try{
        const nam = req.params.name;
        const getData = await question.find({name:nam});
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