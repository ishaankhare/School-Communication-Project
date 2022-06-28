//@desc controller for manager to manage students
const pool = require("../db");

// @desc Get all the students
// @route GET /api/manager/all-students 
const getStudents = async (req,res)=>{
    try {
        const allStudents = await pool.query("SELECT *  FROM users WHERE schoolrole = 'Student'")
        res.status(200).send(allStudents.rows);
    } catch (err) {
        console.error(err.message)
    }
}


// @desc Insert a new student
// @route POST /api/manager/add-student
const setStudent = async (req,res)=>{
    try {
        const { role, firstname, lastname, mobile, email } = req.body;
        const newStudent = await pool.query("INSERT INTO users (schoolrole,firstname, lastname, mobile, email) VALUES($1, $2, $3, $4, $5)", [role, firstname, lastname, mobile, email]);

        res.status(200).send(`Student added: ${firstname}`);
    } catch (err) {
        console.error(err.message)  
    }
}


// @desc Update Student details
// @route PUT /api/manager/update-student/id
const updateStudent = async (req,res)=>{
    try {
        const { id } = req.params;
        const { firstname, lastname, mobile, email } = req.body;
        const updateStudentlist = await pool.query("UPDATE users SET firstname = $1, lastname = $2, mobile = $3, email = $4  WHERE userid = $5 AND schoolrole = 'Student' ", [firstname, lastname, mobile, email, id])
        res.status(200).send(`Updated the details of student ${req.params.id}`);

    } catch (err) {
        console.log(err.message);
    }
}


// @desc Delete Goals
// @route DELETE /api/manager/delete-student/id
const deleteStudent = async (req,res)=>{
    try {
        const { id } = req.params;
        const delStudent = await pool.query("DELETE FROM users WHERE userid = $1 AND schoolrole = 'Student'", [id]);
        res.status(200).send(`Delete the details of student ${req.params.id}`);
    } catch (err) {
        console.log(err);
    }
}

// @desc Get all the students
// @route GET /api/manager/all-teachers 
const getTeachers = async (req,res)=>{
    try {
        const allStudents = await pool.query("SELECT *  FROM users WHERE schoolrole = 'Teacher'")
        res.status(200).send(allStudents.rows);
    } catch (err) {
        console.error(err.message)
    }
}


module.exports = {
    getStudents, getTeachers, setStudent, updateStudent, deleteStudent
}

