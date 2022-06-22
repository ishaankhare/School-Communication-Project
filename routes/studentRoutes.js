const express = require('express');
const { getStudents, getStudent, setStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const router = express.Router()

//List of students
router.get('/', getStudents);

// //Single teacher
router.get('/:id', getStudent);

//Add teacher
router.post('/', setStudent);

// //Update teacher
router.put('/:id', updateStudent);

//Delete teacher
router.delete('/:id', deleteStudent);

//The above can be written as:::

// router.route('/').get(getTeachers).post(setTeacher);
// router.route('/:id').get(getTeacher).put(updateTeacher).delete(deleteTeacher);

module.exports = router
