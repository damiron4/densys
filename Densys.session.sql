--@block
DROP SCHEMA public;
CREATE SCHEMA public;
--@block
CREATE DOMAIN PHONENUMBER CHAR(10) CONSTRAINT phone CHECK (VALUE ~ '^[7][0-9]{9}$');

--@block
DROP DOMAIN PHONENUMBER

--@block
CREATE DOMAIN ROLE VARCHAR(20) CONSTRAINT role CHECK (VALUE = 'admin' OR VALUE = 'doctor' OR VALUE = 'patient');

--@block
CREATE DOMAIN EMAIL VARCHAR(20) CONSTRAINT email CHECK(VALUE ~ '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
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
    iin VARCHAR(20) NOT NULL,
    govid VARCHAR(20) NOT NULL,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    midname VARCHAR(30),
    bloodg VARCHAR(5) NOT NULL,
    emerg PHONENUMBER,
    contactn PHONENUMBER NOT NULL,
    email EMAIL,
    address VARCHAR(50),
    mstatus VARCHAR(15) NOT NULL,
    dreg DATE NOT NULL,
    id SERIAL PRIMARY KEY
);


--drop table DOCTOR
CREATE TABLE DOCTOR(
    dbirth DATE NOT NULL,
    iin VARCHAR(20) NOT NULL,
    govid VARCHAR(20) NOT NULL,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    midname VARCHAR(30),
    contactn PHONENUMBER NOT NULL,
    depid INT NOT NULL,
    specid INT NOT NULL,
    exper INT,
    photo BYTEA,
    category VARCHAR(20) NOT NULL,
    price INT NOT NULL,
    scheduledetails INT NOT NULL,
    degree VARCHAR(30),
    rating FLOAT DEFAULT 0 CHECK(Rating >= 0 and Rating <= 10),
    address VARCHAR(60),
    hpurl VARCHAR(100),
    id SERIAL PRIMARY KEY,
    FOREIGN KEY specid REFERENCES specialization (id)
);

--@block
-- CREATE TABLE specialize (
--     doctorid INT NOT NULL,
--     specid INT NOT NULL,
--     FOREIGN KEY doctorid REFERENCES doctor(id),
--     FOREIGN KEY specid REFERENCES specialization(id)
--     PRIMARY KEY (doctorid, specid)
-- )

CREATE TABLE specialization (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(144)    
)

--@block
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(144),
)

CREATE TABLE procedure (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    depid INT NOT NULL,
    description VARCHAR(144),
    FOREIGN KEY depid REFERENCES department (id)
)
--@block
DROP TABLE appointment
--@block
CREATE TABLE appointment (
  id_p SERIAL PRIMARY KEY,
  pat_name VARCHAR(30) NOT NULL,
  pat_iin VARCHAR9(20) NOT NULL,
  pat_contactn PHONENUMBER NOT NULL, 
  start_t time NOT NULL,
  end_t time NOT NULL,
  day DATE NOT NULL,
  doc_id int NOT NULL,
  dep_id int NOT NULL,
  pro_id int NOT NULL,
  status status NOT NULL,
  FOREIGN KEY (dep_id) REFERENCES department(id), 
  FOREIGN KEY (doc_id) REFERENCES doctor(id),
  FOREIGN KEY (pro_id) REFERENCES procedure(id)
  );
--@block

CREATE TABLE appointment (

)


--@block


-- -- -- Mstatus: Divorced, Married, Separated, Single, Widowed, Rather not say



INSERT INTO auth VALUES (123456,'admin');

--@block 
SELECT * FROM auth
