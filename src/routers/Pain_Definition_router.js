const express = require("express");
const router = express.Router();
const paindefinition = require("../models/Pain_Defination");
const csvtojson = require("csvtojson");

router.post("/importPainDefinition", async (req, res) => {
    csvtojson()
    .fromFile("Book1.csv")
    .then(csvData =>{
        console.log(csvData);
        paindefinition.insertMany(csvData).then(function () {
            console.log("Data Inserted");
            res.json({success : 'success'});
        }).catch(function (err) {
            console.log(err);
        });
    });
});


router.post("/paindefinition", async (req, res) => {
    try{
        const addPD = new paindefinition(req.body);
        const add = await addPD.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/paindefinition/:id", async (req, res) => {
    try{
        const getData = await paindefinition.find({PainArea_id : req.params.id}, {PainArea_id : 0});
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/paindefinition/:id", async (req, res) => {
    try{
        const getData = await paindefinition.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/paindefinition/:name", async (req, res) => {
    try{
        const nam = req.params.name;
        const getData = await paindefinition.find({name:nam});
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.patch("/paindefinition/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updatePD = await paindefinition.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updatePD);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/paindefinition/:id", async (req, res) =>{
    try{
        const deletePD = await paindefinition.findByIdAndDelete(req.params.id);
        !deletePD ? res.status(400).send() : res.status(200).send(deletePD);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;