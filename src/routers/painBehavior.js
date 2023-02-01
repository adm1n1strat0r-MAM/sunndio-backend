const express = require("express");
const router = express.Router();
const painbehavior = require("../models/painBehavior");

// insert painBehavior Data into the MonogoDB
router.post("/painbehavior", async (req, res) => {
    try{
        const addPB = new painbehavior(req.body);
        const add = await addPB.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
// get the painBehaviors By PainDefinitionId
router.get("/painBehaviorsByPainDefinition/:painDefinitionId", async (req, res) => {
    try{
        const getData = await painbehavior.find({painDefinitionId:req.params.painDefinitionId}, {painDefinitionId : 0});
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// get the painBehaviors data from the MongoDB
router.get("/painBehaviors", async (req, res) => {
    try{
        const getData = await painbehavior.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// get the painBehaviors data  from the MongoDB by painBehaviorsId
router.get("/painbehavior/:painBehaviorsId", async (req, res) => {
    try{
        const getData = await painbehavior.findById(req.params.painBehaviorsId);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// update the painBehaviors data by painBehaviorsId
router.patch("/painbehavior/:painBehaviorsId", async (req, res) => {
    try{
        const _id = req.params.painBehaviorsId;
        const updateData = await painbehavior.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateData);
    }catch(err){
        res.status(404).send(err);
    }
});
// delete the painBehaviors data form the MonogoDb by painBehaviorsId
router.delete("/painbehavior/:painBehaviorsId", async (req, res) =>{
    try{
        const deleteData = await painbehavior.findByIdAndDelete(req.params.painBehaviorsId);
        !deleteData ? res.status(400).send() : res.status(200).send(deleteData);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;