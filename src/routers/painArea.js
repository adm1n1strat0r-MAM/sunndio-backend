const express = require("express");
const router = express.Router();
const PainArea = require("../models/painArea");

// Route to create a new pain area
router.post("/painarea", async (req, res) => {
  try {
    // create new PainArea object
    const newPainArea = new PainArea(req.body);
    // save the new pain area to the database
    const savedPainArea = await newPainArea.save();
    // return the saved pain area
    res.status(201).send(savedPainArea);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Route to get all live pain areas
router.get("/painareas", async (req, res) => {
  try {
    // find all pain areas where isLive is true
    const livePainAreas = await PainArea.find({ isLive: true });
    res.status(200).send(livePainAreas);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Route to get a pain area by id
router.get("/painarea/:painAreaId", async (req, res) => {
  try {
    // get the id from the request parameters and find the pain area by id
    const painArea = await PainArea.findById(req.params.painAreaId);
    // if the pain area is not found, return a 404 error
    !painArea ? res.status(404).send() : res.status(200).send(painArea);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Route to update a pain area by id
router.patch("/painarea/:painAreaId", async (req, res) => {
  try {
    // get the id from the request parameters
    const painAreaId = req.params.painAreaId;
    // find and update the pain area by id with the new data
    const updatedPainArea = await PainArea.findByIdAndUpdate(
      painAreaId,
      req.body,
      {
        new: true,
      }
    );
    // return the updated pain area
    res.status(200).send(updatedPainArea);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Route to delete a pain area by id
router.delete("/painarea/:painAreaId", async (req, res) => {
  try {
    // find and delete the pain area by id
    const deletedPainArea = await PainArea.findByIdAndDelete(
      req.params.painAreaId
    );
    // if the pain area is not found, return a 400 error
    !deletedPainArea
      ? res.status(400).send()
      : res.status(200).send(deletedPainArea);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
