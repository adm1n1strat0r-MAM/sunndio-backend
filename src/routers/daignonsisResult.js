const express = require("express");
const router = express.Router();
const DiagnosisResult = require("../models/diagnosisResult");

// Add a new diagnosis result
router.post("/diagnosisResult", async (req, res) => {
  try {
    // Create a new DiagnosisResult instance with the request body and save it to the database
    const newDiagnosisResult = new DiagnosisResult(req.body);
    const addedDiagnosisResult = await newDiagnosisResult.save();
    // Respond with a status code of 201 and the added diagnosis result data
    res.status(201).send(addedDiagnosisResult);
  } catch (err) {
    // Respond with a status code of 404 and the error message if there was an issue adding the data
    res.status(404).send(err);
  }
});

// Get all diagnosis results
router.get("/diagnosisResult", async (req, res) => {
  try {
    // Retrieve all diagnosis results from the database
    const allDiagnosisResults = await DiagnosisResult.find();
    // Respond with a status code of 200 and the retrieved data
    res.status(200).send(allDiagnosisResults);
  } catch (err) {
    // Respond with a status code of 404 and the error message if there was an issue retrieving the data
    res.status(404).send(err);
  }
});

// Get a specific diagnosis result by its ID
router.get("/diagnosisResult/:id", async (req, res) => {
  try {
    // Retrieve the diagnosis result with the matching ID from the database
    const specificDiagnosisResult = await DiagnosisResult.findById(
      req.params.id
    );
    // Respond with a status code of 200 and the retrieved data if it exists, otherwise respond with a status code of 404
    !specificDiagnosisResult
      ? res.status(404).send()
      : res.status(200).send(specificDiagnosisResult);
  } catch (err) {
    // Respond with a status code of 404 and the error message if there was an issue retrieving the data
    res.status(404).send(err);
  }
});

module.exports = router;
