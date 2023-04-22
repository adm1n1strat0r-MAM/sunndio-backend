const express = require("express");
const router = express.Router();
const Diagnostic = require("../models/diagnostics");
const CountryCode = require("../enums/countryCodeEnum");

// insert diagnostic data into the MongoDB
router.post("/diagnostic", async (req, res) => {
  try {
    // Create a new instance of the Diagnostic model using the request body
    const addDiagnostic = new Diagnostic(req.body);
    // Save the new instance to the database
    const result = await addDiagnostic.save();
    // Respond with a status code of 201 and the saved result
    res.status(201).send(result);
  } catch (err) {
    // Respond with a status code of 400 and the error message if there was an issue saving the data
    res.status(400).send(err);
  }
});

// Get all the diagnostics from the database
router.get("/diagnostic/:countryCode", async (req, res) => {
  try {
    var getDiagnostic = await Diagnostic.find();
    var diagnosticObject;
    if (req.params.countryCode === CountryCode.SPANISH) {
      // Retrieve all the diagnostics from the database
      diagnosticObject = getDiagnostic.map((diagnostic) => ({
        id: diagnostic.id,
        diagnostic:
          diagnostic.diagnosisNameEs.charAt(0).toUpperCase() +
          diagnostic.diagnosisNameEs.slice(1).toLowerCase(),
      }));
    } else if (req.params.countryCode === CountryCode.ENGLISH) {
      // Retrieve all the diagnostics from the database
      diagnosticObject = getDiagnostic.map((diagnostic) => ({
        id: diagnostic.id,
        diagnostic:
          diagnostic.diagnosisName.charAt(0).toUpperCase() +
          diagnostic.diagnosisName.slice(1).toLowerCase(),
      }));
    } else {
      res.status(400).json({
        success: `\"${req.params.countryCode}\" this countryCode is not available`,
      });
    }
    // Respond with a status code of 200 and the retrieved data
    res.status(200).send(diagnosticObject);
  } catch (err) {
    // Respond with a status code of 404 and the error message if there was an issue retrieving the data
    res.status(500).send(err);
  }
});

// Get a specific diagnostic by its ID
router.get("/diagnostic/:diagnosticId", async (req, res) => {
  try {
    // Retrieve the diagnostic with the matching ID from the database
    const getDiagnostic = await Diagnostic.findById(req.params.diagnosticId);
    // Respond with a status code of 200 and the retrieved data if it exists, otherwise respond with a status code of 404
    !getDiagnostic
      ? res.status(404).send()
      : res.status(200).send(getDiagnostic);
  } catch (err) {
    // Respond with a status code of 404 and the error message if there was an issue retrieving the data
    res.status(404).send(err);
  }
});

// Update a specific diagnostic by its ID
router.patch("/diagnostic/:diagnosticId", async (req, res) => {
  try {
    // Retrieve the diagnostic with the matching ID from the database and update it with the request body
    const updatedDiagnostic = await Diagnostic.findByIdAndUpdate(
      req.params.diagnosticId,
      req.body,
      {
        new: true,
      }
    );
    // Respond with a status code of 200 and the updated diagnostic data
    res.status(200).send(updatedDiagnostic);
  } catch (err) {
    // Respond with a status code of 404 and the error message if there was an issue updating the diagnostic data
    res.status(404).send(err);
  }
});

// Delete a specific diagnostic by its ID
router.delete("/diagnostic/:diagnosticId", async (req, res) => {
  try {
    // Retrieve and delete the diagnostic with the matching ID from the database
    const deletedDiagnostic = await Diagnostic.findByIdAndDelete(
      req.params.diagnosticId
    );
    // Respond with a status code of 200 and the deleted data if it exists, otherwise respond with a status code of 404
    !deletedDiagnostic
      ? res.status(404).send()
      : res.status(200).send(deletedDiagnostic);
  } catch (err) {
    // Respond with a status code of 404 and the error message if there was an issue deleting the data
    res.status(404).send(err);
  }
});

module.exports = router;
