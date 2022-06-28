const express = require('express');
const { getStudents, getTeachers, setStudent, updateStudent, deleteStudent } = require('../controllers/managerController');
const { protectManager } = require('../middleware/authMiddleware');
const router = express.Router()

//List of students
//http://localhost:8000/api/manager/all-students
router.get('/all-students/', protectManager, getStudents);

//Add student
//http://localhost:8000/api/manager/add-student
router.post('/add-student/', protectManager ,setStudent);

// Update student
//http://localhost:8000/api/manager/update-student/id
router.put('/update-student/:id', protectManager ,updateStudent);

//Delete student
//http://localhost:8000/api/manager/delete-student/id
router.delete('/delete-student/:id', protectManager ,deleteStudent);

//List of teachers
//http://localhost:8000/api/manager/all-teacher
router.get('/all-teachers/', protectManager ,getTeachers);

module.exports = router
