CREATE DATABASE communicationdb;

CREATE TABLE teachers(
    teacherid SERIAL PRIMARY KEY,
    description VARCHAR(255), 
    firstname VARCHAR(255)
);


ALTER TABLE teachers
ADD COLUMN lastName VARCHAR(255),
ADD COLUMN mobile VARCHAR(255),
ADD COLUMN email VARCHAR(255);

INSERT INTO teachers (
    firstname,
    lastname,
    mobile,
    email
)
VALUES
    ('Sandeep', 'Jain', '12345678','test@gmail.com');



CREATE TABLE students(
    studentid SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastName VARCHAR(255),
    mobile VARCHAR(255),
    email VARCHAR(255)
);


INSERT INTO students (
    firstname,
    lastname,
    mobile,
    email
)
VALUES
    ('Ishaan', 'Jain', '12345678','test@gmail.com');