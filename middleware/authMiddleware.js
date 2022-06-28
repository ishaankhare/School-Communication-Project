const jwt = require('jsonwebtoken');
const pool = require('../db');

//Middleware for protecting admin routes
const protectAdmin = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        //Get token from header
        token = req.headers.authorization.split(' ')[1];    

        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Get user from the payload
        const derivedEmail = decoded.email;
        const derivedRole = decoded.role;
        
        if(derivedRole === "Admin") {
            req.user = await pool.query("SELECT * FROM users WHERE email=$1", [derivedEmail]);

            next();
        } else {
            res.send("Not authorized");
        }
    }
    else{
        res.send("Token not found");
    }
};

//Middleware for protecting manager routes
const protectManager = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        //Get token from header
        token = req.headers.authorization.split(' ')[1];    

        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Get user from the payload
        const derivedEmail = decoded.email;
        const derivedRole = decoded.role;
        
        if(derivedRole === "Manager") {
            req.user = await pool.query("SELECT * FROM users WHERE email=$1", [derivedEmail]);

            next();
        } else {
            res.send("Not authorized");
        }
    }
    else{
        res.send("Token not found");
    }
};



module.exports = { protectAdmin, protectManager };