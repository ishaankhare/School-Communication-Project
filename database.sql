CREATE DATABASE communicationdb;

CREATE TABLE teachers(
    teacherid SERIAL PRIMARY KEY,
    description VARCHAR(255), 
    firstname VARCHAR(255)
);

CREATE TABLE users(
    userid SERIAL PRIMARY KEY,
    Schoolrole VARCHAR(255),
    firstname VARCHAR(255),
    lastName VARCHAR(255),
    mobile VARCHAR(255),
    email VARCHAR(255)
);


ALTER TABLE users
ADD COLUMN password VARCHAR(255);

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


INSERT INTO users (
    schoolrole,
    firstname,
    lastname,
    mobile,
    email
)
VALUES ('Admin','Dean', 'IIIT', '12345678','test@gmail.com');

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


CREATE TABLE subscriptions(
    subsid SERIAL PRIMARY KEY,
    providerid INTEGER REFERENCES teachers (teacherid),
    subscriberid INTEGER REFERENCES students (studentid)
);


INSERT INTO teachers (firstname, lastname, mobile, email) VALUES(Ama, Gupta, 8368221046, mhv371@gmail.com);

INSERT INTO teachers (firstname, lastname, mobile, email) VALUES($1, $2, $3, $4)", [firstname, lastname, mobile, email]





