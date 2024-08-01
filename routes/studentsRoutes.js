const express = require('express');
const { getStudents, getStudentByID, createStudent, updateStudent } = require('../controllers/studentController');

const router = express.Router()

//routes

//get all students
router.get('/getall', getStudents);

//get student by id
router.get('/get/:id', getStudentByID);

//create student
router.post('/create', createStudent);

//update student
router.post('/update', updateStudent);

module.exports = router;