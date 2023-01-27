const express = require("express");
const router = express.Router();
const painarea = require("../models/Pain_Area");
const csvtojson = require("csvtojson");

router.post("/importPainArea", async (req, res) => {
    csvtojson()
    .fromFile("Book1.csv")
    .then(csvData =>{
        console.log(csvData);
        painarea.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});

router.post("/painarea", async (req, res) => {
    try{
        const addPA = new painarea(req.body);
        console.log(addPA);
        const add = await addPA.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/painareas", async (req, res) => {
    try{
        const getData = await painarea.find({IsLive : true});
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/painarea/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const getData = await painarea.findById(_id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/painarea/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updatePA = await painarea.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        console.log(updatePA);
        res.status(200).send(updatePA);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/painarea/:id", async (req, res) =>{
    try{
        const deletePA = await painarea.findByIdAndDelete(req.params.id);
        !deletePA ? res.status(400).send() : res.status(200).send(deletePA);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;