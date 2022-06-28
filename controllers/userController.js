// @desc Get Goals
require("dotenv").config();

const pool = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//@route POST /api/register/
const registerUser = async (req,res) => {
    try {
        const { firstname, lastname, mobile, email, password } = req.body;
        
        const existingUser = await pool.query("SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)", [email]);
        //console.log(String(existingUser.rows[0].exists));
        const checkExistence = String(existingUser.rows[0].exists);


        //Check whether email exists 
        if(checkExistence === "true"){
            res.send('Enter a different email id');
        }
        else{
            const schoolrole = "Guest";

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await pool.query("INSERT INTO users (schoolrole,firstname, lastname, mobile, email, password) VALUES($1, $2, $3, $4, $5, $6)", [schoolrole, firstname, lastname, mobile, email, hashedPassword]);

            res.status(200).send(`User added: ${firstname}`);
        }

    } catch (err) {
        res.send(err.message);
    }

}

// @route POST /api/login/
const validateLogin = async (req,res)=>{
    try {
        const { email, password } = req.body;
        let registeredPerson = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        //Check for user email 
        try {
            if(String(email) === String(registeredPerson.rows[0].email)){

                //Get email and password if registered            
                const storedPassword = registeredPerson.rows[0].password;
                const role = registeredPerson.rows[0].schoolrole;

                //Compare passwords
                if(await bcrypt.compare(password, storedPassword)){
                    const token = generateToken(role, email);
                    res.send(token);
                }
                else{
                    res.send("Wrong password");
                }
            }
        } catch (err) {
            res.send("You are not registered");

        }
    } catch (err) {
        console.error(err.message)
    }
}

//@route GET /api/update/ 
const updatePassword = async (req,res)=>{
    try {
        const { email, password } = req.body;

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Update a user
        const newTeacher = await pool.query("UPDATE users SET password = $1 WHERE email = $2", [hashedPassword, email]);

        res.status(200).send(`Password updated`);

        res.status(200)
    } catch (err) {
        console.error(err.message)
    }
}

const generateToken = (role, email) => {
    return jwt.sign({ role, email }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    } )
};


module.exports = {
    registerUser,
    updatePassword,
    validateLogin
}

