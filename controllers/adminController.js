// @desc Managing of teachers by admin

const pool = require("../db");

// @route GET /api/admin/all-teachers
const getTeachers = async (req,res)=>{
    try {
        const allTeachers = await pool.query("SELECT *  FROM users WHERE schoolrole = 'Teacher'")
        res.status(200).send(allTeachers.rows);
    } catch (err) {
        console.error(err.message)
    }
}

// @route POST /api/admin/add-teacher
const setTeacher = async (req,res)=>{
    try {
        const { role, firstname, lastname, mobile, email } = req.body;
        const newTeacher = await pool.query("INSERT INTO users (schoolrole,firstname, lastname, mobile, email) VALUES($1, $2, $3, $4, $5)", [role, firstname, lastname, mobile, email]);

        res.status(200).send(`teacher added: ${firstname}`);
    } catch (err) {
        console.error(err.message)  
    }
}


// @route PUT /api/admin/update-teacher/:id
const updateTeacher = async (req,res)=>{
    try {
        const { id } = req.params;
        const { firstname, lastname, mobile, email } = req.body;
        const updateTeacherlist = await pool.query("UPDATE users SET firstname = $1, lastname = $2, mobile = $3, email = $4  WHERE userid = $5 AND schoolrole = 'Teacher' ", [firstname, lastname, mobile, email, id]) 
        res.status(200).send('teacher updated');
        console.log(`Update the details of teacher ${req.params.id}`);
    } catch (err) {
        console.log(err.message);
    }
}

// @route PUT /api/admin/update-role/:id
const updateRole = async (req,res)=>{
    try {
        const { id } = req.params;
        const { assignedRole } = req.body;

        const updatedUser = await pool.query("UPDATE users SET schoolrole = $1 WHERE userid = $2 AND schoolrole = 'Guest' ", [assignedRole, id]) 
        res.status(200).send('role assigned');

    } catch (err) {
        console.log(err.message);
    }
}

// @route DELETE /api/admin/delete-teachers/:id
const deleteTeacher = async (req,res)=>{
    try {
        const { id } = req.params;
        const delTeacher = await pool.query("DELETE FROM users WHERE userid = $1 AND schoolrole = 'Teacher'", [id]);
        res.status(200).send(`Deleted the details of teacher ${req.params.id}`);
    } catch (err) {
        console.log(err);
    }

}

module.exports = {
    getTeachers, setTeacher, updateTeacher, deleteTeacher, updateRole
}

