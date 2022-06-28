const express = require('express');
const { getStudents, getStudent, setStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const { getTeachers } = require('../controllers/teacherController');
const router = express.Router()

// Single student
router.get('/me/', getStudent);

// All teachers
router.get('teachers/', getTeachers);

//The above can be written as:::

// router.route('/').get(getTeachers).post(setTeacher);
// router.route('/:id').get(getTeacher).put(updateTeacher).delete(deleteTeacher);

module.exports = router
