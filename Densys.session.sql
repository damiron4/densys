--SELECT * FROM patient;

 --SELECT * from doctor;
 --SELECT * from auth_doctor;

-- CREATE DOMAIN PHONENUMBER CHAR(10) CHECK (
--     VALUE ~ '^[7][0-9]{9}$');

-- DROP TABLE PATIENT;
--DROP DOMAIN EMAIL;

--CREATE DOMAIN EMAIL VARCHAR(20);
-- CHECK(
--     VALUE ~ '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
-- );

-- -- DRop TABLE auth;

-- -- CREATE TABLE AUTH (
-- --     Login VARCHAR(15) NOT NULL,
-- --     Pass VARCHAR(20) NOT NULL
-- -- )

-- CREATE TABLE AUTH_PATIENT (
--     Login VARCHAR(15) NOT NULL,
--     Pass VARCHAR(20) NOT NULL
-- );

-- CREATE TABLE AUTH_DOCTOR (
--     Login VARCHAR(15) NOT NULL,
--     Pass VARCHAR(20) NOT NULL
-- );

-- -- INSERT INTO auth VALUES ('admin', 'admin');

 --drop table patient;

CREATE TABLE PATIENT (
    Bdate DATE NOT NULL,
    IIN VARCHAR(15) NOT NULL,
    ID_number VARCHAR(15) NOT NULL,
    Fname VARCHAR(15) NOT NULL,
    Sname VARCHAR(15) NOT NULL,
    Mname VARCHAR(15),
    Bgroup INT CHECK (Bgroup >= 1 and Bgroup <= 4),
    Econtact_number PHONENUMBER,
    Contact_number PHONENUMBER NOT NULL,
    Email EMAIL,
    Address VARCHAR(30),
    Mstatus VARCHAR(3) NOT NULL,
    Rdate DATE NOT NULL,
    PRIMARY KEY (IIN)
);

--@block
drop table DOCTOR

--@block
CREATE TABLE DOCTOR(
    dbirth DATE NOT NULL,
    iin VARCHAR(15) NOT NULL PRIMARY KEY,
    id VARCHAR(15) NOT NULL,
    name VARCHAR(15) NOT NULL,
    surname VARCHAR(15) NOT NULL,
    midname VARCHAR(15),
    contactn PHONENUMBER NOT NULL,
    depid VARCHAR(15) NOT NULL,
    specid VARCHAR(15) NOT NULL,
    exper INT DEFAULT 0,
    photo BYTEA,
    category VARCHAR(10) NOT NULL,
    price INT NOT NULL,
    scheduledetails VARCHAR(60),
    degree VARCHAR(30),
    rating FLOAT DEFAULT 0 CHECK(Rating >= 0 and Rating <= 10),
    address VARCHAR(30),
    hpurl VARCHAR(60)
);

--@block
-- -- -- Mstatus: Divorced, Married, Separated, Single, Widowed, Rather not say


--@block
INSERT INTO auth VALUES (123456,'admin');

--@block 
SELECT * FROM auth
