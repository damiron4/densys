--SELECT * FROM patient;

 --SELECT * from doctor;
 --SELECT * from auth_doctor;
--@block
DROP SCHEMA public;
CREATE SCHEMA public;
--@block
CREATE DOMAIN PHONENUMBER CHAR(10) CONSTRAINT phone CHECK (VALUE ~ '^[7][0-9]{9}$');
--@block
-- DROP TABLE PATIENT;
--DROP DOMAIN EMAIL;
DROP DOMAIN PHONENUMBER
--@block
CREATE DOMAIN ROLE VARCHAR(20) CONSTRAINT role CHECK (VALUE = 'admin' OR VALUE = 'doctor' OR VALUE = 'patient');

--@block
CREATE DOMAIN EMAIL VARCHAR(20)
CONSTRAINT email CHECK(
    VALUE ~ '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
);
--@block
DROP TABLE auth;

--@block
CREATE TABLE AUTH (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    role ROLE NOT NULL
);

--@block
INSERT INTO auth (username, password, role) VALUES ('admin', 'admin', 'admin');


--@block
 --drop table patient;


CREATE TABLE PATIENT (
    dbirth DATE NOT NULL,
    iin VARCHAR(15) NOT NULL,
    id VARCHAR(15) NOT NULL,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    midname VARCHAR(30),
    bloodg INT CHECK (bloodg >= 1 and bloodg <= 4),
    emerg PHONENUMBER,
    contactn PHONENUMBER NOT NULL,
    email EMAIL,
    address VARCHAR(50),
    mstatus VARCHAR(3) NOT NULL,
    dreg DATE NOT NULL,
    PRIMARY KEY (iin)
);


--drop table DOCTOR


CREATE TABLE DOCTOR(
    dbirth DATE NOT NULL,
    iin VARCHAR(15) NOT NULL PRIMARY KEY,
    id VARCHAR(15) NOT NULL,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    midname VARCHAR(30),
    contactn PHONENUMBER NOT NULL,
    depid VARCHAR(15) NOT NULL,
    specid VARCHAR(30) NOT NULL,
    exper INT DEFAULT 0,
    photo BYTEA,
    category VARCHAR(10) NOT NULL,
    price INT NOT NULL,
    scheduledetails VARCHAR(60),
    degree VARCHAR(30),
    rating FLOAT DEFAULT 0 CHECK(Rating >= 0 and Rating <= 10),
    address VARCHAR(60),
    hpurl VARCHAR(100)
);


-- -- -- Mstatus: Divorced, Married, Separated, Single, Widowed, Rather not say



INSERT INTO auth VALUES (123456,'admin');

--@block 
SELECT * FROM auth
