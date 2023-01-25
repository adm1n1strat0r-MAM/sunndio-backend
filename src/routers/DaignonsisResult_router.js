const express = require("express");
const router = express.Router();
const DiagnonsisResult = require("../models/DiagnosisResult");
const csvtojson = require("csvtojson");

router.post("/importDiagnonsisResult", async (req, res) => {
    csvtojson()
    .fromFile("Book1.csv")
    .then(csvData =>{
        console.log(csvData);
        DiagnonsisResult.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});


router.post("/DiagnonsisResult", async (req, res) => {
    try{
        const addPD = new DiagnonsisResult(req.body);
        const add = await addPD.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/DiagnonsisResult", async (req, res) => {
    try{
        const getData = await DiagnonsisResult.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/DiagnonsisResult/:id", async (req, res) => {
    try{
        const getData = await DiagnonsisResult.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/DiagnonsisResult/:name", async (req, res) => {
    try{
        const nam = req.params.name;
        const getData = await DiagnonsisResult.find({name:nam});
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/DiagnonsisResult/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updateDR = await DiagnonsisResult.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateDR);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/DiagnonsisResult/:id", async (req, res) =>{
    try{
        const deleteDR = await DiagnonsisResult.findByIdAndDelete(req.params.id);
        !deleteDR ? res.status(400).send() : res.status(200).send(deleteDR);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;