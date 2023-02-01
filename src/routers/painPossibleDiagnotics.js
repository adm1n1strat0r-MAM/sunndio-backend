const express = require("express");
const router = express.Router();
const painPossibleDiag = require("../models/painPossibleDiagnostics");

router.post("/painPossibleDiag", async (req, res) => {
    try{
        const addData = new painPossibleDiag(req.body);
        const add = await addData.save();
        res.status(201).send(add);
    }catch(err){
        res.status(404).send(err);
    }
});
router.get("/painPossibleDiagBypainBehaviorId/:painBehaviorId", async (req, res) => {
    try{
        const getData = await painPossibleDiag.find();
        res.status(200).send(getData);
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
router.patch("/painPossibleDiag/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        
        const updateData = await painPossibleDiag.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateData);
    }catch(err){
        res.status(404).send(err);
    }
});
router.delete("/painPossibleDiag/:id", async (req, res) =>{
    try{
        const deleteData = await painPossibleDiag.findByIdAndDelete(req.params.id);
        !deleteData ? res.status(400).send() : res.status(200).send(deleteData);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;