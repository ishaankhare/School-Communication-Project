const pool = require("../db");

// @desc Get all the students
// @route GET /api/students 
const getMyDetails = async (req,res)=>{
    try {
        const allStudents = await pool.query("SELECT * FROM students")
        res.status(200).send(allStudents.rows);
    } catch (err) {
        console.error(err.message)
    }
}

// @desc Get student for a single id
// @route GET /api/students/id
const getTeacherDetails = async (req,res)=>{
    try {
        const { id } = req.params;
        const Student = await pool.query("SELECT * FROM students WHERE studentid = $1", [id])
        res.status(200).send(Student);
    } catch (err) {
        console.log(err.message);
    }
}


module.exports = {
    getMyDetails, getTeacherDetails
}

