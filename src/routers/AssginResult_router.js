const express = require("express");
const router = express.Router();
const AssignResult = require("../models/AssginResult");
const csvtojson = require("csvtojson");

router.post("/importAssignResult", async (req, res) => {
    csvtojson()
    .fromFile("2.3.csv")
    .then(csvData =>{
        console.log(csvData);
        AssignResult.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});


router.post("/AssignResult", async (req, res) => {
    try{
        const addPD = new AssignResult(req.body);
        const add = await addPD.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/AssignResult", async (req, res) => {
    try{
        const getData = await AssignResult.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/AssignResult/:id", async (req, res) => {
    try{
        const getData = await AssignResult.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/AssignResult/:name", async (req, res) => {
    try{
        const nam = req.params.name;
        const getData = await AssignResult.find({name:nam});
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/AssignResult/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updateAR = await AssignResult.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateAR);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/AssignResult/:id", async (req, res) =>{
    try{
        const deleteAR = await AssignResult.findByIdAndDelete(req.params.id);
        !deleteAR ? res.status(400).send() : res.status(200).send(deleteAR);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;