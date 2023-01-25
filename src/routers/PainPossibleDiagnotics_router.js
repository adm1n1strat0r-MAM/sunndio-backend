const express = require("express");
const router = express.Router();
const painPossibleDiag = require("../models/PainPossibleDiagnotics");
const csvtojson = require("csvtojson");

router.post("/importpainPossibleDiag", async (req, res) => {
    csvtojson()
    .fromFile("Book1.csv")
    .then(csvData =>{
        console.log(csvData);
        painPossibleDiag.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});

router.post("/painPossibleDiag", async (req, res) => {
    try{
        const addPB = new painPossibleDiag(req.body);
        const add = await addPB.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/painPossibleDiag", async (req, res) => {
    try{
        const getData = await painPossibleDiag.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/painPossibleDiag/:id", async (req, res) => {
    try{
        const getData = await painPossibleDiag.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/painPossibleDiag/:name", async (req, res) => {
    try{
        const nam = req.params.name;
        const getData = await painPossibleDiag.find({name:nam});
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/painPossibleDiag/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updatePPD = await painPossibleDiag.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updatePPD);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/painPossibleDiag/:id", async (req, res) =>{
    try{
        const deletePPD = await painPossibleDiag.findByIdAndDelete(req.params.id);
        !deletePPD ? res.status(400).send() : res.status(200).send(deletePPD);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;