--SELECT * FROM auth_patient;

 --SELECT * from doctor;
 SELECT * from auth_doctor;

-- CREATE DOMAIN PHONENUMBER CHAR(10) CHECK (
--     VALUE ~ '^[7][0-9]{9}$');

-- DROP TABLE PATIENT;
-- DROP DOMAIN EMAIL;

-- CREATE DOMAIN EMAIL VARCHAR(20);
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

-- drop table patient;

-- CREATE TABLE PATIENT (
--     Bdate DATE NOT NULL,
--     IIN VARCHAR(15) NOT NULL,
--     ID_number VARCHAR(15) NOT NULL,
--     Fname VARCHAR(15) NOT NULL,
--     Sname VARCHAR(15) NOT NULL,
--     Mname VARCHAR(15),
--     Bgroup INT CHECK (Bgroup >= 1 and Bgroup <= 4),
--     Econtact_number PHONENUMBER,
--     Contact_number PHONENUMBER NOT NULL,
--     Email EMAIL,
--     Address VARCHAR(30),
--     Mstatus VARCHAR(3) NOT NULL,
--     Rdate DATE NOT NULL,
--     PRIMARY KEY (IIN)
-- );

--drop table DOCTOR

-- CREATE TABLE DOCTOR(
--     Bdate DATE NOT NULL,
--     IIN VARCHAR(15) NOT NULL PRIMARY KEY,
--     ID_number VARCHAR(15) NOT NULL,
--     Fname VARCHAR(15) NOT NULL,
--     Sname VARCHAR(15) NOT NULL,
--     Mname VARCHAR(15),
--     Contact_number PHONENUMBER NOT NULL,
--     Department_ID VARCHAR(15) NOT NULL,
--     Specialization_details_ID VARCHAR(15) NOT NULL,
--     Experience INT DEFAULT 0,
--     Photo BYTEA,
--     Category VARCHAR(10) NOT NULL,
--     Price INT NOT NULL,
--     Schedule_details VARCHAR(60) NOT NULL,
--     Education VARCHAR(10),
--     Rating FLOAT DEFAULT 0 CHECK(Rating >= 0 and Rating <= 10),
--     Address VARCHAR(30),
--     Homepage_URL VARCHAR(60)
-- );

-- -- -- Mstatus: Divorced, Married, Separated, Single, Widowed, Rather not say