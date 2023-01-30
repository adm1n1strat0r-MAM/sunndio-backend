const express = require("express");
const router = express.Router();
const Diagnostic = require("../models/diagnostics");

// insert diagnostic data into the MongoDB
router.post("/diagnostic", async (req, res) => {
    try{
        const addPD = new Diagnostic(req.body);
        const add = await addPD.save();
        res.status(201).send(add);
    }catch(err){
        res.status(400).send(err);
    }
});
// get all the diagnostics 
router.get("/diagnostic", async (req, res) => {
    try{
        const getData = await Diagnostic.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// get the diagnostic by diagnosticId
router.get("/diagnostic/:diagnosticId", async (req, res) => {
    try{
        const getData = await Diagnostic.findById(req.params.diagnosticId);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// update the diagnostic data into the MongoDB by diagnosticId
router.patch("/diagnostic/:diagnosticId", async (req, res) => {
    try{
        const _id = req.params.diagnosticId;
        const updateData = await Diagnostic.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateData);
    }catch(err){
        res.status(404).send(err);
    }
});
// Delete the diagnostic data from the MonogoDB by diagnosticId
router.delete("/diagnostic/:diagnosticId", async (req, res) =>{
    try{
        const deleteData = await Diagnostic.findByIdAndDelete(req.params.diagnosticId);
        !deleteData ? res.status(404).send() : res.status(200).send(deleteData);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;