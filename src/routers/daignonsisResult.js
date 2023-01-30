const express = require("express");
const router = express.Router();
const DiagnonsisResult = require("../models/diagnosisResult");

router.post("/DiagnonsisResult", async (req, res) => {
    try{
        const addData = new DiagnonsisResult(req.body);
        const added = await addData.save();
        res.status(201).send(added);
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
module.exports = router;