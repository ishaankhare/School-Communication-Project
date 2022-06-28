const express = require('express');
const app = express();
const pool = require('./db')
const port = 8000;

app.use(express.json());
//app.use(express.urlencoded({ extended: false}));

app.get('/', (req,res)=>{
    res.send('Welcome to the student-teacher communication portal!!!! GO TO /api/login for login')
});

//Route to get key
app.use('/api', require('./routes/userRoutes.js'));

//Routes for Admin
app.use('/api/admin', require('./routes/adminRoutes.js'));

//Routes for Manager
app.use('/api/manager', require('./routes/managerRoutes.js'));

//Routes for teachers
//app.use('/api/teacher', require('./routes/teacherRoutes.js'));

//Routes for student
//app.use('/api/student', require('./routes/studentRoutes.js'));



app.listen(port, ()=> console.log(`Server started on port ${port}`));

