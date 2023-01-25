const express = require("express");
const router = express.Router();
const Diagnostic = require("../models/Diagnostics");
const csvtojson = require("csvtojson");

router.post("/importDiagnostic", async (req, res) => {
    csvtojson()
    .fromFile("Book1.csv")
    .then(csvData =>{
        console.log(csvData);
        Diagnostic.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});


router.post("/Diagnostic", async (req, res) => {
    try{
        const addPD = new Diagnostic(req.body);
        const add = await addPD.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/Diagnostic", async (req, res) => {
    try{
        const getData = await Diagnostic.find({},{_id:1});
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/Diagnostic/:id", async (req, res) => {
    try{
        const getData = await Diagnostic.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/Diagnostic/:name", async (req, res) => {
    try{
        const nam = req.params.name;
        const getData = await Diagnostic.find({name:nam});
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/Diagnostic/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updatediag = await Diagnostic.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updatediag);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/Diagnostic/:id", async (req, res) =>{
    try{
        const deletediag = await Diagnostic.findByIdAndDelete(req.params.id);
        !deletediag ? res.status(400).send() : res.status(200).send(deletediag);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;