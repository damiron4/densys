const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const e = require("express");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
// TODO: Write Get/Post/update routes

app.post("/register/patient", async (req, res) => {
    try {
        console.log("Patient info received");
        const { dbirth, iin, id, name, surname, midname, bloodg, emerg, contactn, email, address, mstatus, dreg} = req.body;
        pool.query("INSERT INTO patient VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
            [dbirth, iin, id, name, surname, midname, bloodg, emerg, contactn, email, address, mstatus, dreg],
            async (error) => {
                if (!error) {
                    const password = Math.random().toString(36).slice(2, 10);
                    pool.query("INSERT INTO auth_patient VALUES($1, $2)", [iin, password], (err, result) => {
                        if (err) {
                            res.json({ err: err });
                        }
                        if (result.rowCount > 0) {
                            res.send({
                                message: "Patient registration is successful.",
                                username: iin,
                                password: password
                            });
                        }
                    });
                }
                else {
                    res.send({ message: error.message });
                }
            }
        );
    } catch (error) {
        console.error(error.message);
    }
});

app.post("/register/doctor", async (req, res) => {
    try {
        console.log("Doctor info received");
        const {dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetailsdetails, degree, rating, address, hpurl } = req.body;
        pool.query("INSERT INTO doctor VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)",
            [dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetailsdetails, degree, rating, address, hpurl],
            async (error) => {
                if (!error) {
                    const password = Math.random().toString(36).slice(2, 10);
                    pool.query("INSERT INTO auth_doctor VALUES($1, $2)", [iin, password], (err, result) => {
                        if (err) {
                            res.json({ err: err });
                        }
                        if (result.rowCount > 0) {
                            res.send({
                                message: "Doctor registration is successful.",
                                username: iin,
                                password: password
                            });
                        }
                    });
                } else {
                    res.send({ message: error.message });
                }
            }
        );
    } catch (error) {
        console.error(error.message)
    }

});



app.post("/login/admin", async (req, res) => {
    // const { username, password } = req.body;
    try {
        console.log("Admin login received");
        const { username, password } = req.body;
        const result = await pool.query("SELECT * FROM auth WHERE login = $1 and pass = $2", [username, password])
        if (result.rowCount != 0) {
            res.send({ message: "Login successful." });
        } else {
            res.send({ message: "Wrong username or password." });
        }
    } catch (error) {
        console.log(error.message);
    }

    // console.log(req.body);
    // const result = await pool.query("SELECT * FROM auth WHERE login = $1 and pass = $2",
    // [username, password]),
    // (error, result) => {
    //     console.log("AA");
    //     if (error) {
    //         console.log(error);
    //         res.send({error: error})
    //     }
    //     console.log(result);
    //     if (result.rowCount > 0) {

    //         res.send({message: "Login successful"})
    //         // res.send({status: 1 , message: "Login successful."});
    //     } else {
    //         res.send({message: "Wrong username or password"});
    //     }}
}
)

app.post("/login/doctor", async (req, res) => {
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

app.post("/login/patient", async (req, res) => {
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
        const id = req.params.id;
        const allInfo = await pool.query("SELECT * FROM patient WHERE id = $1", [id]);
        res.json(allInfo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/doctor/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const allInfo = await pool.query("SELECT * FROM doctor WHERE id = $1", [id]);
        res.json(allInfo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/patient/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { dbirth, iin, govid, name, surname, midname, bloodg, emerg, contactn, email, address, mstatus} = req.body;
        await pool.query(
            "UPDATE patient SET Bdbirth = $1, iin = $2, govid = $3, name = $4, surname = $5, midname = $6, bloodg = $7, emerg = $8, contactn = $9, email = $10, address = $11, mstatus = $12 WHERE id = $13",
            [dbirth, iin, govid, name, surname, midname, bloodg, emerg, contactn, email, address, mstatus, id]
        );

        res.json("Patient was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/doctor/:id", async (req, res) => {
    try {
        const id = req.params.id;
        //add iin
        const {dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetails, degree, rating, address, hpurl}
            = req.body;
        await pool.query(
            "UPDATE doctor SET dbirth = $1, iin = $2, govid = $3, name = $4, surname = $5, midname = $6, contactnn = $7, depid = $8, specid = $9, exper = $10, photo = $11, category = $12, price = $13, scheduledetailsdetails = $14, degree = $15, rating = $16, address = $17, hpurl = 18$ WHERE id = $19",
            [dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetails, degree, rating, address, hpurl, id]
        );
        res.json("Doctor was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("started on port 5000")
});