const express = require("express");
const router = express.Router();
const paindefinition = require("../models/painDefinition");

// insert the painDefinition data in to MonogoDB
router.post("/painDefinition", async (req, res) => {
    try{
        const addPaindefinition = new paindefinition(req.body);
        const savedPaindefinition= await addPaindefinition.save();
        res.status(201).send(savedPaindefinition);
    }catch(err){
        res.status(400).send(err);
    }
});
// get the painDefinitions By PainAreaId
router.get("/painDefinitionsByPainAreaId/:painAreaId", async (req, res) => {
    try{
        const getPaindefinition = await paindefinition.find({painAreaId : req.params.painAreaId}, {painAreaId : 0});
        res.status(200).send(getPaindefinition);
    }catch(err){
        res.status(404).send(err);
    }
});
// get all the painDefinition data
router.get("/painDefinitions", async (req, res) => {
    try{
        const getPaindefinition = await paindefinition.find();
        res.status(200).send(getPaindefinition);
    }catch(err){
        res.status(404).send(err);
    }
});
// get the painDefinitions data by painDefinitionId
router.get("/painDefinitions/:id", async (req, res) => {
    try{
        const getPaindefinition = await paindefinition.findById(req.params.id);
        !getPaindefinition ? res.status(404).send() : res.status(200).send(getPaindefinition);
    }catch(err){
        res.status(404).send(err);
    }
});
// update the painDefiniton data by painDefinitionId
router.patch("/painDefinition/:painDefinitionId", async (req, res) => {
    try{
        const updatePaindefinition = await paindefinition.findByIdAndUpdate(req.params.painDefinitionId, req.body,{
            new : true
        });
        res.status(200).send(updatePaindefinition);
    }catch(err){
        res.status(404).send(err);
    }
});
// delete the painDefiniton data by painDefinitionId
router.delete("/painDefinition/:painDefinitionId", async (req, res) =>{
    try{
        const deletePaindefinition = await paindefinition.findByIdAndDelete(req.params.painDefinitionId);
        !deletePaindefinition ? res.status(400).send() : res.status(200).send(deletePaindefinition);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;