// @desc Get Goals

const pool = require("../db");

// @route GET /api/teachers 
const getStudents = async (req,res)=>{
    try {
        const allStudents = await pool.query("SELECT * FROM students")
        res.status(200).send(allStudents.rows);
    } catch (err) {
        console.error(err.message)
    }
}

// @desc Get Goals
// @route GET /api/goals 
const getStudent = async (req,res)=>{
    try {
        const { id } = req.params;
        const Student = await pool.query("SELECT * FROM students WHERE studentid = $1", [id])
        res.status(200).send(Student);
    } catch (err) {
        console.log(err.message);
    }
}


// @desc POST Goals
// @route POST /api/goals 
const setStudent = async (req,res)=>{
    try {
        const { firstname, lastname, mobile, email } = req.body;
        const newStudent = await pool.query("INSERT INTO students (firstname, lastname, mobile, email) VALUES($1, $2, $3, $4)", [firstname, lastname, mobile, email]);

        res.status(200).send('Student added');
    } catch (err) {
        console.error(err.message)  
    }
}


// @desc Update Goals
// @route PUT /api/goals 
const updateStudent = async (req,res)=>{
    try {
        const { id } = req.params;
        const { firstname, lastname, mobile, email } = req.body;
        const updateStudentlist = await pool.query("UPDATE students SET firstname=$1, lastname=$2, mobile=$3, email=$4 WHERE studentid = $5", [firstname, lastname, mobile, email, id])
        res.status(200).send(`Updated the details of student ${req.params.id}`);

    } catch (err) {
        console.log(err.message);
    }
}


// @desc Delete Goals
// @route DELETE /api/goals 
const deleteStudent = async (req,res)=>{
    try {
        const { id } = req.params;
        const delStudent = await pool.query("DELETE FROM students WHERE studentid = $1", [id]);
        res.status(200).send(`Delete the details of student ${req.params.id}`);
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    getStudents, getStudent, setStudent, updateStudent, deleteStudent
}

