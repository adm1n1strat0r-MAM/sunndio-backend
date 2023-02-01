const express = require("express");
const router = express.Router();
const painarea = require("../models/painArea");


// create the painArea
router.post("/painarea", async (req, res) => {
    try{
        const addData = new painarea(req.body);
        console.log(addData);
        const added = await addPA.save();
        res.status(201).send(added);
    }catch(err){
        res.status(404).send(err);
    }
});
// get data of painArea which one is live
router.get("/painareas", async (req, res) => {
    try{
        const getData = await painarea.find({isLive : true});
        res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// get the painArea data by ID
router.get("/painarea/:painAreaId", async (req, res) => {
    try{
        const _id = req.params.painAreaId;
        const getData = await painarea.findById(_id);
        !getData ? res.status(404).send() : res.status(200).send(getData);
    }catch(err){
        res.status(404).send(err);
    }
});
// update the painArea data by ID
router.patch("/painarea/:painAreaId", async (req, res) => {
    try{
        const _id = req.params.painAreaId;
        const updateData = await painarea.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.status(200).send(updateData);
    }catch(err){
        res.status(404).send(err);
    }
});
// delete the painArea Data by ID
router.delete("/painarea/:painAreaId", async (req, res) =>{
    try{
        const deleteData = await painarea.findByIdAndDelete(req.params.painAreaId);
        !deleteData ? res.status(400).send() : res.status(200).send(deleteData);
    }catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;