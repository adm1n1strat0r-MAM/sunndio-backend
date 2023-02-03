const express = require("express");
const router = express.Router();
const painPossibleDiag = require("../models/painPossibleDiagnostics");

router.post("/painPossibleDiag", async (req, res) => {
  try {
    const addPainPossibleDiag = new painPossibleDiag(req.body);
    const savedPainPossibleDiag = await addPainPossibleDiag.save();
    res.status(201).send(savedPainPossibleDiag);
  } catch (err) {
    res.status(404).send(err);
  }
});
router.get(
  "/painPossibleDiagBypainBehaviorId/:painBehaviorId",
  async (req, res) => {
    try {
      const getPainPossibleDiag = await painPossibleDiag.find();
      res.status(200).send(getPainPossibleDiag);
    } catch (err) {
      res.status(404).send(err);
    }
  }
);
router.get("/painPossibleDiag", async (req, res) => {
  try {
    const getPainPossibleDiag = await painPossibleDiag.find();
    res.status(200).send(getPainPossibleDiag);
  } catch (err) {
    res.status(404).send(err);
  }
});
router.get("/painPossibleDiag/:id", async (req, res) => {
  try {
    const getPainPossibleDiag = await painPossibleDiag.findById(req.params.id);
    !getPainPossibleDiag
      ? res.status(404).send()
      : res.status(200).send(getPainPossibleDiag);
  } catch (err) {
    res.status(404).send(err);
  }
});
router.patch("/painPossibleDiag/:id", async (req, res) => {
  try {
    const updatePainPossibleDiag = await painPossibleDiag.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(updatePainPossibleDiag);
  } catch (err) {
    res.status(404).send(err);
  }
});
router.delete("/painPossibleDiag/:id", async (req, res) => {
  try {
    const deletePainPossibleDiag = await painPossibleDiag.findByIdAndDelete(
      req.params.id
    );
    !deletePainPossibleDiag
      ? res.status(400).send()
      : res.status(200).send(deletePainPossibleDiag);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
