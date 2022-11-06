const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
// TODO: Write Get/Post/Update routes

app.post("/register-patient", async (req, res) => {
    try {
        check = true
        console.log(req.body);
        const { date, IIN, id, name, surname, middlename, b_group, emer_contact, contact, email, address, marital_stat, reg_date } = req.body;
        await pool.query("INSERT INTO patient VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
            [date, IIN, id, name, surname, middlename, b_group, emer_contact, contact, email, address, marital_stat, reg_date],
            (err, result) => {
                if (err) {
                    res.json({ err: err });
                }
                // console.log(result);
                if (result.rowCount == 0) {
                    check = false
                    res.json({ message: "Incorrect values." });
                }

            })
        if (check) {
            const password = Math.random().toString(36).slice(2, 10);
            await pool.query("INSERT INTO auth_patient VALUES($1, $2)", [IIN, password], (err, result) => {
                if (err) {
                    res.json({ err: err });
                }
                // console.log(result);
                if (result.rowCount > 0) {
                    res.json({ message: "Registration successful", login: IIN, password: password });
                }
            });
        }
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/register-doctor", async (req, res) => {
    check = true
    console.log(req.body);
    const { date, IIN, id, name, surname, middlename, contact, dep_id, special_id, exp, photo, ctg, price, schedule, degree, rating, address, homepage_url } = req.body;
    await pool.query("INSERT INTO doctor VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)",
        [date, IIN, id, name, surname, middlename, contact, dep_id, special_id, exp, photo, ctg, price, schedule, degree, rating, address, homepage_url],
        (err, result) => {
            if (err) {
                res.json({ err: err });
            }
            // console.log(result);
            if (result.rowCount == 0) {
                check = false
                res.json({ message: "Incorrect values." });
            }
        });
    if (check) {
        const password = Math.random().toString(36).slice(2, 10);
        await pool.query("INSERT INTO auth_doctor VALUES($1, $2)", [IIN, password], (err, result) => {
            if (err) {
                res.json({ err: err });
            }
            // console.log(result);
            if (result.rowCount > 0) {
                res.json({ message: "Registration successful", login: IIN, password: password });
            }
        });
    }
    // const newUser = await pool.query("INSERT INTO auth VALUES($1,$2) RETURNING *", [iin, pass])        
});



app.post("/login-admin", async (req, res) => {
    try {
        console.log(req.body);
        const { login, pass } = req.body;
        await pool.query("SELECT * FROM auth WHERE login = $1 and pass = $2", [login, pass], (err, result) => {
            if (err) {
                res.json({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ message: "Login successful." });
            } else {
                res.json({ message: "Wrong username or password." });
            }
        })
        // const newUser = await pool.query("INSERT INTO auth VALUES($1,$2) RETURNING *", [iin, pass])        
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/login-doctor", async (req, res) => {
    try {
        console.log(req.body);
        const { login, pass } = req.body;
        await pool.query("SELECT * FROM auth_doctor WHERE login = $1 and pass = $2", [login, pass], (err, result) => {
            if (err) {
                res.json({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ message: "Login successful." });
            } else {
                res.json({ message: "Wrong username or password." });
            }
        })
        // const newUser = await pool.query("INSERT INTO auth VALUES($1,$2) RETURNING *", [iin, pass])        
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/login-patient", async (req, res) => {
    try {
        console.log(req.body);
        const { login, pass } = req.body;
        await pool.query("SELECT * FROM auth_patient WHERE login = $1 and pass = $2", [login, pass], (err, result) => {
            if (err) {
                res.json({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ message: "Login successful." });
            } else {
                res.json({ message: "Wrong username or password." });
            }
        })
        // const newUser = await pool.query("INSERT INTO auth VALUES($1,$2) RETURNING *", [iin, pass])        
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/patient", async (req, res) => {
    try {
        const allInfo = await pool.query("SELECT * FROM patient");
        res.json(allInfo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/doctor", async (req, res) => {
    try {
        const allInfo = await pool.query("SELECT * FROM doctor");
        res.json(allInfo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/patient/:id", async (req, res) => {
    try {
        const IIN = req.params.id;
        const allInfo = await pool.query("SELECT * FROM patient WHERE IIN = $1", [IIN]);
        res.json(allInfo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/doctor/:id", async (req, res) => {
    try {
        const IIN = req.params.id;
        const allInfo = await pool.query("SELECT * FROM doctor WHERE IIN = $1", [IIN]);
        res.json(allInfo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/patient/:id", async (req, res) => {
    try {
        const IIN = req.params.id;
        //add IIN
        const { date, id, name, surname, middlename, b_group, emer_contact, contact, email, address, marital_stat, reg_date } = req.body;
        const updatePatientInfo = await pool.query(
            "UPDATE patient SET Bdate = $1, ID_number = $2, Fname = $3, Sname = $4, Mname = $5, Bgroup = $6, Econtact_number = $7, Contact_number = $8, Email = $9, Address = $10, Mstatus = $11, Rdate = $12, WHERE IIN = $18",
            [date, id, name, surname, middlename, b_group, emer_contact, contact, email, address, marital_stat, reg_date, IIN]
        );

        res.json("Patient was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/doctor/:id", async (req, res) => {
    try {
        const IIN = req.params.id;
        //add IIN
        const { date, id, name, surname, middlename, contact, dep_id, special_id, exp, photo, ctg, price, schedule, degree, rating, address, homepage_url }
            = req.body;
        const updatePatientInfo = await pool.query(
            "UPDATE doctor SET Bdate = $1, ID_number = $2, Fname = $3, Sname = $4, Mname = $5, Contact_number = $6, Department_ID = $7, Specialization_details_ID = $8, Experience = $9, Photo = $10, Category = $11, Price = $12, Schedule_details = $13, Education = $14, Rating = $15, Address = $16, Homepage_URL = $17 WHERE IIN = $18",
            [date, id, name, surname, middlename, contact, dep_id, special_id, exp, photo, ctg, price, schedule, degree, rating, address, homepage_url, IIN]
        );
        res.json("Patient was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("started on port 5000")
});