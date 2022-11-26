const express = require("express");
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")


const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true }));

app.use(
    session({
        key: "userID",
        secret: "secretlol",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60*60*24,
        }})
)

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
        const { dbirth, iin, id, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetails, degree, rating, address, hpurl } = req.body;
        pool.query("INSERT INTO doctor VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)",
            [dbirth, iin, id, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetails, degree, rating, address, hpurl],
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

app.get("/login/admin", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
});

app.post("/login/admin", async (req, res) => {
    // const { username, password } = req.body;
    try {
        console.log("Admin login received");
        const { username, password } = req.body;
        const result = await pool.query("SELECT * FROM auth WHERE login = $1 and pass = $2;", [username, password])
        if (result.rowCount != 0) {
            req.session.user = result.rows[0];
            console.log(req.session.user);
            res.send({message: "Login successful"});
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
        const iin = req.params.id;
        const allInfo = await pool.query("SELECT * FROM patient WHERE iin = $1", [iin]);
        res.json(allInfo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/doctor/:id", async (req, res) => {
    try {
        const iin = req.params.id;
        const allInfo = await pool.query("SELECT * FROM doctor WHERE iin = $1", [iin]);
        res.json(allInfo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/patient/:id", async (req, res) => {
    try {
        const iin = req.params.id;
        //add iin
        const { date, id, name, surname, middlename, b_group, emer_contact, contact, email, address, marital_stat, reg_date } = req.body;
        const updatePatientInfo = await pool.query(
            "UPDATE patient SET Bdate = $1, ID_number = $2, Fname = $3, Sname = $4, Mname = $5, Bgroup = $6, Econtact_number = $7, Contact_number = $8, Email = $9, Address = $10, Mstatus = $11, Rdate = $12 WHERE iin = $13",
            [date, id, name, surname, middlename, b_group, emer_contact, contact, email, address, marital_stat, reg_date, iin]
        );

        res.json("Patient was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/doctor/:id", async (req, res) => {
    try {
        const iin = req.params.id;
        //add iin
        const { date, id, name, surname, middlename, contact, dep_id, special_id, exp, photo, ctg, price, schedule, degree, rating, address, homepage_url }
            = req.body;
        const updatePatientInfo = await pool.query(
            "UPDATE doctor SET Bdate = $1, ID_number = $2, Fname = $3, Sname = $4, Mname = $5, Contact_number = $6, Department_ID = $7, Specialization_details_ID = $8, Experience = $9, Photo = $10, Category = $11, Price = $12, Schedule_details = $13, Education = $14, Rating = $15, Address = $16, Homepage_URL = $17 WHERE iin = $18",
            [date, id, name, surname, middlename, contact, dep_id, special_id, exp, photo, ctg, price, schedule, degree, rating, address, homepage_url, iin]
        );
        res.json("Doctor was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("started on port 5000")
});