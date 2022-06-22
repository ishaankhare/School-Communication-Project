// @desc Get Goals

const pool = require("../db");

// @route GET /api/teachers 
const getTeachers = async (req,res)=>{
    try {
        const allTeachers = await pool.query("SELECT * FROM teachers")
        res.status(200).send(allTeachers.rows);
    } catch (err) {
        console.error(err.message)
    }
}

// @desc Get Goals
// @route GET /api/goals 
const getTeacher = async (req,res)=>{
    try {
        const { id } = req.params;
        const Teacher = await pool.query("SELECT * FROM teachers WHERE teacherid = $1", [id])
        res.status(200).send(Teacher);
        console.log(`The details of teacher ${req.params.id}`);
    } catch (err) {
        console.error(err.message)
    }
}


// @desc POST Goals
// @route POST /api/goals 
const setTeacher = async (req,res)=>{
    try {
        const { firstname, lastname, mobile, email } = req.body;
        const newTeacher = await pool.query("INSERT INTO teachers (firstname, lastname, mobile, email) VALUES($1, $2, $3, $4)", [firstname, lastname, mobile, email]);

        res.status(200).send('teacher added');
    } catch (err) {
        console.error(err.message)  
    }
}


// @desc Update Goals
// @route POST /api/goals 
const updateTeacher = async (req,res)=>{
    try {
        const { id } = req.params;
        const { firstname, lastname, mobile, email } = req.body;
        const updateTeacherlist = await pool.query("UPDATE teachers SET firstname = $1, lastname = $2, mobile = $3, email = $4  WHERE teacherid = $5", [firstname, lastname, mobile, email, id])
        res.status(200).send('teacher updated');
        console.log(`Update the details of teacher ${req.params.id}`);
    } catch (err) {
        console.log(err.message);
    }
}


// @desc Delete Goals
// @route DELETE /api/goals 
const deleteTeacher = async (req,res)=>{
    try {
        const { id } = req.params;
        const delTeacher = await pool.query("DELETE FROM teachers WHERE teacherid = $1", [id]);
        res.status(200).send(`Delete the details of teacher ${req.params.id}`);
    } catch (err) {
        console.log(err);
    }

}


module.exports = {
    getTeachers, getTeacher, setTeacher, updateTeacher, deleteTeacher
}

