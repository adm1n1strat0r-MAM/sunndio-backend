const express = require("express");
const router = express.Router();
const AssignResult = require("../models/assignResult");
const csvtojson = require("csvtojson");


// function to read the data from the CSV file or Excel and insert into the MongoDB
router.post("/importAssignResult", async (req, res) => {
  csvtojson()
    .fromFile("2.3.csv")
    .then((csvData) => {
      console.log(csvData);
      AssignResult.insertMany(csvData)
        .then(function () {
          console.log("Data Inserted");
          res.json({ success: "success" });
        })
        .catch(function (err) {
          console.log(err);
        });
    });
});

// insert the assignResult
router.post("/assignResult", async (req, res) => {
  try {
    const addData = new AssignResult(req.body);
    const added = await addData.save();
    res.status(201).send(added);
  } catch (err) {
    res.status(404).send(err);
  }
});
// get the all assignResult
router.get("/assignResult", async (req, res) => {
  try {
    const getData = await AssignResult.find();
    res.status(200).send(getData);
  } catch (err) {
    res.status(404).send(err);
  }
});
// get the assignResult By assignResultId
router.get("/assignResult/:assignResultId", async (req, res) => {
  try {
    const getData = await AssignResult.findById(req.params.assignResultId);
    !getData ? res.status(404).send() : res.status(200).send(getData);
  } catch (err) {
    res.status(404).send(err);
  }
});
// update the assignResult by assignResultId
router.patch("/AssignResult/:assignResultId", async (req, res) => {
  try {
    const _id = req.params.assignResultId;
    const updateAR = await AssignResult.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateAR);
  } catch (err) {
    res.status(404).send(err);
  }
});
// delete the assignResult by assignResultId
router.delete("/AssignResult/:assignResultId", async (req, res) => {
  try {
    const deleteAR = await AssignResult.findByIdAndDelete(
      req.params.assignResultId
    );
    !deleteAR ? res.status(400).send() : res.status(200).send(deleteAR);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
