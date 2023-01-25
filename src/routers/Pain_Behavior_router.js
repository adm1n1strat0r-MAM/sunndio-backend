const express = require("express");
const router = express.Router();
const painbehavior = require("../models/Pain_Behavior");
const csvtojson = require("csvtojson");

router.post("/importPainbehavior", async (req, res) => {
    csvtojson()
    .fromFile("Book1.csv")
    .then(csvData =>{
        console.log(csvData);
        painbehavior.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});

router.post("/painbehavior", async (req, res) => {
    try{
        const addPB = new painbehavior(req.body);
        const add = await addPB.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/painbehavior/:id", async (req, res) => {
    try{
        const getData = await painbehavior.find({PainDefinition_id:req.params.id}, {PainDefinition_id : 0});
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/painbehavior/:id", async (req, res) => {
    try{
        const getData = await painbehavior.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/painbehavior/:name", async (req, res) => {
    try{
        const nam = req.params.name;
        const getData = await painbehavior.find({name:nam});
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/painbehavior/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updatePB = await painbehavior.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updatePB);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/painbehavior/:id", async (req, res) =>{
    try{
        const deletePB = await painbehavior.findByIdAndDelete(req.params.id);
        !deletePB ? res.status(400).send() : res.status(200).send(deletePB);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;