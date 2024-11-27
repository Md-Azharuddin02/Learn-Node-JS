const express = require("express");
const {
  handleGetAllStudents,
  handleGetStudentsById,
  handleUpdateStudate,
  hendleDeleteStudent,
  handleCreateStudents,
} = require("../controllers/students");

const router = express.Router();

//Create student and get all details
router.route("/")
.get(handleGetAllStudents)
.post(handleCreateStudents);

//get student by id, update and delete students details
router
  .route("/:id")
  .get(handleGetStudentsById)
  .patch(handleUpdateStudate)
  .delete(hendleDeleteStudent);

module.exports = router;
