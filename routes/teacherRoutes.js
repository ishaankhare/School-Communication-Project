const express = require('express');
const { getTeachers, getTeacher, setTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherController');
const router = express.Router()

// //List of teachers
// router.get('/', getTeachers);

// // //Single teacher
// router.get('/:id', getTeacher);

// //Add teacher
// router.post('/', setTeacher);

// // //Update teacher
// router.put('/:id', updateTeacher);

// //Delete teacher
// router.delete('/:id', deleteTeacher);

//The above can be written as:::

router.route('/').get(getTeachers).post(setTeacher);
router.route('/:id').get(getTeacher).put(updateTeacher).delete(deleteTeacher);

module.exports = router


