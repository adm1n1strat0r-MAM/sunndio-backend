const express = require("express");
const router = express.Router();
const paindefinition = require("../models/painDefinition");

// insert the painDefinition data in to MonogoDB
router.post("/painDefinition", async (req, res) => {
    try{
        const addData = new paindefinition(req.body);
        const added= await addData.save();
        res.status(201).send(added);
    }catch(err){
        res.status(400).send(err);
    }
});
// get the painDefinitions By PainAreaId
router.get("/painDefinitionsByPainAreaId/:painAreaId", async (req, res) => {
    try{
        const getData = await paindefinition.find({PainArea_id : req.params.painAreaId}, {PainArea_id : 0});
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// get all the painDefinition data
router.get("/painDefinitions", async (req, res) => {
    try{
        const getData = await paindefinition.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// get the painDefinitions data by painDefinitionId
router.get("/painDefinitions/:id", async (req, res) => {
    try{
        const getData = await paindefinition.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// update the painDefiniton data by painDefinitionId
router.patch("/painDefinition/:painDefinitionId", async (req, res) => {
    try{
        const _id = req.params.painDefinitionId;
        const updateData = await paindefinition.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateData);
    }catch(err){
        res.status(404).send(err);
    }
});
// delete the painDefiniton data by painDefinitionId
router.delete("/painDefinition/:painDefinitionId", async (req, res) =>{
    try{
        const deleteData = await paindefinition.findByIdAndDelete(req.params.painDefinitionId);
        !deleteData ? res.status(400).send() : res.status(200).send(deleteData);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;