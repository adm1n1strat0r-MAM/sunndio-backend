const express = require("express");
const router = express.Router();
const Probability = require("../models/probability");


// insert probability data into the MonogoDB
router.post("/Probability", async (req, res) => {
    try{
        
        const addData = new Probability(req.body);
        const added = await addData.save();
        res.status(201).send(added);
    }catch(err){
        res.status(404).send(err);
    }
});
// get all the probability data from the MonogoDB
router.get("/Probability", async (req, res) => {
    try{
        const getData = await Probability.find();
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// get the probability data by Id
router.get("/Probability/:id", async (req, res) => {
    try{
        const getData = await Probability.findById(req.params.id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// update the probability data into the MonogoDB by id
router.patch("/Probability/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const updateData = await Probability.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateData);
    }catch(err){
        res.status(404).send(err);
    }
});
// delete the probability data from the MonogoDB by id
router.delete("/Probability/:id", async (req, res) =>{
    try{
        const deleteData = await Probability.findByIdAndDelete(req.params.id);
        !deleteData ? res.status(400).send() : res.status(200).send(deleteData);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;