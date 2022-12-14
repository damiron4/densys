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
    methods: ["GET", "POST", "DELETE", "PUT"],
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
        const {dbirth, iin, govid, name, surname, midname, bloodg, emerg, contactn, email, address, mstatus, dreg} = req.body;
        pool.query("INSERT INTO patient (dbirth, iin, govid, name, surname, midname, bloodg, emerg, contactn, email, address, mstatus, dreg) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
            [dbirth, iin, govid, name, surname, midname, bloodg, emerg, contactn, email, address, mstatus, dreg],
            async (error) => {
                if (!error) {
                    const password = Math.random().toString(36).slice(2, 10);
                    pool.query("INSERT INTO auth (username, password, role) VALUES($1, $2, 'patient')", [iin, password], (err, result) => {
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
        const {dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, degree, rating, address, hpurl } = req.body;
        pool.query("INSERT INTO doctor (dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, degree, rating, address, hpurl) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING id",
            [dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, degree, rating, address, hpurl],
            async (error, result) => {
                if (!error) {
                    temp_hpurl = "/doctor/" + result.rows[0].id;
                    pool.query("UPDATE doctor SET hpurl = $1 WHERE iin = $2", [temp_hpurl, iin],
                    async(err) => {
                        if(err) {
                            res.json({err:err});
                        }
                    });
                    const password = Math.random().toString(36).slice(2, 10);
                    pool.query("INSERT INTO auth (username, password, role) VALUES($1, $2, 'doctor')", [iin, password], (err, result) => {
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

app.post("/appointment-form",(req, res) => {
   try {
        console.log("Appointment info received");
        const {name, iin, contactn, start_t, end_t, day, doc_id, dep_id, pro_id, status} = req.body;
        pool.query("INSERT INTO appointment(name, iin, contactn, start_t, end_t, day, doc_id, dep_id, pro_id, status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNIN id_p",
        [name, iin, contactn, start_t, end_t, day, doc_id, dep_id, pro_id, status],
        async (error) => {
            if(error) {
                res.send({message: error.message}); 
            }
        }); 
   }
   catch(error){
        console.log(error.message);
   } 
});

app.get("/appointments", async (req, res) => {
    try {
        // console.log("ssss");
        const appointments = await pool.query("SELECT A.id, A.day, A.start_t, A.end_t, A.name, A.surname, A.contactn, D.name AS dname, D.surname AS dsname, P.name AS pname, A.status FROM appointment A, doctor D, procedure P WHERE A.pro_id = P.id AND A.doc_id = D.id ORDER BY day, start_t");
        res.json(appointments.rows);
        console.log(appointments);
    }
    catch(error){
         console.log(error.message);
    } 
 });

 app.post("/appointment/approve/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query("UPDATE appointment SET status = 'Approved' WHERE id = $1", [id]);
        if (result.rowCount > 0) {
            res.send({result: 1});
        } else {
            res.send({result: 0})
        }
        // console.log(result);
    }
    catch(error){
         console.log(error.message);
    } 
 });

 app.post("/appointment/cancel/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query("UPDATE appointment SET status = 'Canceled' WHERE id = $1", [id]);
        if (result.rowCount > 0) {
            res.send({result: 1});
        } else {
            res.send({result: 0})
        }
    }
    catch(error){
         console.log(error.message);
    } 
 });

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
});

app.delete('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(400).send('Unable to log out')
            } else {
                res.send('Logout successful')
            }
        });
    } else {
        res.end();
    }
  })

app.post("/login", async (req, res) => {
    // const { username, password } = req.body;
    try {
        console.log("Login info received");
        const { username, password, userType } = req.body;
        const result = await pool.query("SELECT * FROM auth WHERE username = $1 and password = $2 and role = $3;", [username, password, userType])
        if (result.rowCount != 0) {
            req.session.user = result.rows[0];
            res.send({message: "Login successful."});
        } else {
            res.send({ message: "Wrong username or password." });
        }
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
    } catch (error) {
        console.error(error.message);
    }
});

app.get("/doctor/search", async (req, res) => {
    try {
        pool.query("SELECT (id, name, surname) FROM doctor", (err, result) => {
            var doctorNames = [];
            for (x of result.rows){
                doctor = x.row.replaceAll(","," ").replace("(","").replace(")","").split(" ");
                doctorNames.push({
                    id: parseInt(doctor[0]),
                    name: doctor[1] + " " + doctor[2]
                })
            }
            res.send(doctorNames);
        });
    } catch (error) {
        console.error(error.message);        
    }
})

app.get("/specialization/search", async (req, res) => {
    try {
        pool.query("SELECT (id, name) FROM specialization", (err, result) => {
            var specializationNames = [];
            for (x of result.rows){
                specialization = x.row.replaceAll(","," ").replace("(","").replace(")","").split(" ");
                specializationNames.push({
                    id: parseInt(specialization[0]),
                    name: specialization[1]
                })
            }
            res.send(specializationNames);
        });
    } catch (error) {
        console.error(error.message);        
    }
})

app.get("/doctor/specialization/:id", async (req, res) => {
    try {
        const specid = req.params.id;
        const allInfo = await pool.query("SELECT * FROM doctor WHERE specid = $1", [specid]);
        res.json(allInfo.rows);
    } catch (error) {
        console.error(error.message);        
    }
})

app.get("/procedure/search", async (req, res) => {
    try {
        pool.query("SELECT (id, name) FROM procedure", (err, result) => {
            var procedureNames = [];
            for (x of result.rows){
                procedure = x.row.replaceAll("(","").replaceAll(")","").replaceAll("\"","").split(",");
                procedureNames.push({
                    id: parseInt(procedure[0]),
                    name: procedure[1]
                })
            }
            res.send(procedureNames);
        });
    } catch (error) {
        console.error(error.message);        
    }
})

app.get("/doctor/procedure/:id", async (req, res) => {
    try {
        const procid = req.params.id;
        const allInfo = await pool.query("SELECT * FROM doctor D WHERE D.depid IN (SELECT P.depid FROM procedure P WHERE P.depid = D.depid AND P.id = $1)", [procid]);
        res.json(allInfo.rows);
    } catch (error) {
        console.error(error.message);        
    }
})

app.get("/doctor/search/result", async (req, res) => {
    try {
        pool.query("SELECT (id, name, surname) FROM doctor", (err, result) => {
            var doctorNames = [];
            let i = 0;
            for (x of result.rows){
                doctor = x.row.replaceAll(","," ").replace("(","").replace(")","").split(" ");
                doctorNames.push({
                    id: parseInt(doctor[0]),
                    name: doctor[1] + " " + doctor[2]
                })
                i++;
            }
            res.send(doctorNames);
        });
    } catch (error) {
        console.error(error.message);        
    }
})

app.get("/departments", async (req, res) => {
    try {
        const allInfo = await pool.query("SELECT * FROM department");
        res.json(allInfo.rows);
    } catch (error) {
        console.error(error.message);        
    }
})

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
    console.log("New info is received");
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
    console.log("New info is received");
    try {
        const id = req.params.id;
        //add iin
        const {dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetails, degree, rating, address, hpurl}
            = req.body;
        await pool.query(
            "UPDATE doctor SET dbirth = $1, iin = $2, govid = $3, name = $4, surname = $5, midname = $6, contactnn = $7, depid = $8, specid = $9, exper = $10, photo = $11, category = $12, price = $13, scheduledetails = $14, degree = $15, rating = $16, address = $17, hpurl = 18$ WHERE id = $19",
            [dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetails, degree, rating, address, hpurl, id]
        );
        res.json("Doctor was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5001, () => {
    console.log("started on port 5001")
});