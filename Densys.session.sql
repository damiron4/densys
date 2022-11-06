--SELECT * FROM auth



-- CREATE DOMAIN PHONENUMBER CHAR(10) CHECK (
--     VALUE ~ '^[7][0-9]{9}$');

-- CREATE DOMAIN EMAIL AS VARCHAR(20) CHECK(
--     VALUE ~ '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
-- );

-- -- DRop TABLE auth;

-- -- CREATE TABLE AUTH (
-- --     Login VARCHAR(15) NOT NULL,
-- --     Pass VARCHAR(20) NOT NULL
-- -- )

CREATE TABLE AUTH_PATIENT (
    Login VARCHAR(15) NOT NULL,
    Pass VARCHAR(20) NOT NULL
);

CREATE TABLE AUTH_DOCTOR (
    Login VARCHAR(15) NOT NULL,
    Pass VARCHAR(20) NOT NULL
);

-- -- INSERT INTO auth VALUES ('admin', 'admin');



-- CREATE TABLE PATIENT (
--     Bdate DATE NOT NULL,
--     IIN INT NOT NULL,
--     ID_number INT NOT NULL,
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

-- CREATE TABLE DOCTOR(
--     Bdate DATE NOT NULL,
--     IIN INT NOT NULL PRIMARY KEY,
--     ID_number INT NOT NULL,
--     Fname VARCHAR(15) NOT NULL,
--     Sname VARCHAR(15) NOT NULL,
--     Mname VARCHAR(15),
--     Contact_number PHONENUMBER NOT NULL,
--     Department_ID INT NOT NULL,
--     Specialization_details_ID INT NOT NULL,
--     Experience INT DEFAULT 0,
--     Category VARCHAR(10) NOT NULL,
--     Price INT NOT NULL,
--     Schedule_details CHAR NOT NULL,
--     Education VARCHAR(10),
--     Rating INT DEFAULT 0 CHECK(Rating >= 0 and Rating <= 10),
--     Address VARCHAR(30),
--     Homepage_URL CHAR
-- );

-- -- -- Mstatus: Divorced, Married, Separated, Single, Widowed, Rather not say