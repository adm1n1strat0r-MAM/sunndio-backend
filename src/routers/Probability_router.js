const express = require("express");
const router = express.Router();
const Probability = require("../models/Probability");
const painBehavior = require("../models/Pain_Behavior");
const csvtojson = require("csvtojson");

router.post("/importProbability", async (req, res) => {
    csvtojson()
    .fromFile("Book3.csv")
    .then(csvData =>{
        console.log(csvData);
        Probability.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});

router.post("/Probability", async (req, res) => {
    try{
        
        const addPB = new Probability(req.body);
        const add = await addPB.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/Probability", async (req, res) => {
    try{
        const getData = await Probability.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/Probability/:id", async (req, res) => {
    try{
        const getData = await Probability.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/Probability/:name", async (req, res) => {
    try{
        const nam = req.params.name;
        const getData = await Probability.find({name:nam});
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/Probability/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updateprob = await Probability.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateprob);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/Probability/:id", async (req, res) =>{
    try{
        const deleteProb = await Probability.findByIdAndDelete(req.params.id);
        !deleteProb ? res.status(400).send() : res.status(200).send(deleteProb);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;