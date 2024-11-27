const express = require("express");
const studentsModel  = require("../models/students");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await studentsModel.find({});
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(`something went wrong ${error}`);
  }
});
//Create students details
router.post("/", async (req, res) => {
  try {
    const body = await req.body;
    const result = await studentsModel.create({
      rollNumber: body.roll_number,
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
    });
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(`User creation error as ${error}`);
  }
});

//Find the student by Id
router.get("/:id", async (req, res) => {
  try {
    const student = await studentsModel.findById(req.params.id);
    if (!student) return res.status(404).json("Not found");
    return res.status(200).json(student);
  } catch (error) {
    return res.status(400).json(`something went wrong ${error}`);
  }
});
//update the staudent details
router.patch("/:id", async (req, res) => {
  const data = req.body;
  try {
    await studentsModel.findByIdAndUpdate(req.params.id, {
      email: data.email,
    });
    return res.status(200).json("Updated successfully");
  } catch (error) {
    return res.status(400).json(`something went wrong ${error}`);
  }
});

//Delete the student details
router.delete("/:id", async (req, res) => {
  try {
    await studentsModel.findByIdAndDelete(req.params.id);
    return res.status(200).json("Deleted Successfully");
  } catch (error) {
    return res.status(400).json(`something went wrong ${error}`);
  }
});

module.exports = router;
