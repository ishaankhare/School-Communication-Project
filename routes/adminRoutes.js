const express = require('express');
const { getTeachers, updateRole, setTeacher, updateTeacher, deleteTeacher } = require('../controllers/adminController');
const router = express.Router()
const {protectAdmin} = require('../middleware/authMiddleware');

//List of teachers
//http://localhost:8000/api/admin/all-teachers
router.get('/all-teachers', protectAdmin, getTeachers);

//Add teacher
//http://localhost:8000/api/admin/add-teacher
router.post('/add-teacher', protectAdmin, setTeacher);

//Update teacher
//http://localhost:8000/api/admin/update-teacher/id
router.put('/update-teacher/:id', protectAdmin, updateTeacher);

//Delete teacher
//http://localhost:8000/api/admin/delete-teacher/id
router.delete('/delete-teacher/:id', protectAdmin, deleteTeacher);

//Delete teacher
//http://localhost:8000/api/admin/update-role/id
router.put('/update-role/:id', protectAdmin, updateRole);

module.exports = router


