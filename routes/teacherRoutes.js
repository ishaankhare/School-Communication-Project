const express = require('express');
const { getTeachers, getTeacher, setTeacher, updateTeacher, deleteTeacher, addStudent, deleteStudent } = require('../controllers/teacherController');
const router = express.Router()

//Write route to send emails to students 






//The above can be written as:::

// router.route('/').get(getTeachers).post(setTeacher);
// router.route('/:id').get(getTeacher).put(updateTeacher).delete(deleteTeacher);
router.route('/subscriptions/:id').post(addStudent)//.put(deleteStudent);

module.exports = router


