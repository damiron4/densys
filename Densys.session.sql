SELECT * FROM auth



-- CREATE DOMAIN PHONENUMBER CHAR(10) CHECK (LEN(PHONENUMBER) == 10);

-- CREATE DOMAIN EMAIL VARCHAR(20);

-- DRop TABLE auth;

-- CREATE TABLE AUTH (
--     Login VARCHAR(15) NOT NULL,
--     Pass VARCHAR(20) NOT NULL
-- )


-- INSERT INTO auth VALUES ('admin', 'admin');



-- CREATE TABLE PATIENT (
--     Bdate DATE NOT NULL,
--     IIN INT NOT NULL,
--     ID_number INT NOT NULL,
--     Fname VARCHAR(15) NOT NULL,
--     Sname VARCHAR(15) NOT NULL,
--     Mname VARCHAR(15),
--     Bgroup INT CHECK (Bgroup >= 1, Bgroup <= 4),
--     Econtact_number PHONENUMBER,
--     Contact_number PHONENUMBER NOT NULL,
--     Email EMAIL,
--     Address VARCHAR(30),
--     Mstatus VARCHAR(3) NOT NULL,
--     Rdate DATE NOT NULL
-- );

-- CREATE TABLE DOCTOR(
--     Bdate DATE NOT NULL,
--     IIN INT NOT NULL,
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
--     Homepage_URL CHAR);

-- -- Mstatus: Divorced, Married, Separated, Single, Widowed, Rather not say