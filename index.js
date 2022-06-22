const express = require('express');
const app = express();
const cors = require("cors");
const pool = require('./db')
const port = 8000;
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: false}));

app.get('/', (req,res)=>{
    res.send('Welcome to the student-teacher communication portal!!!!')
});

//Routes for teachers
app.use('/api/teachers', require('./routes/teacherRoutes.js'));

//Routes for student
app.use('/api/students', require('./routes/studentRoutes.js'));

app.listen(port, ()=> console.log(`Server started on port ${port}`));

