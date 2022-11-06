const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
// TODO: Write Get/Post/Update routes

app.post("/login", async (req, res) => {
    try {
        console.log(req.body);
        const {login, pass} = req.body;
        await pool.query("SELECT * FROM auth WHERE login = $1 and pass = $2", [login, pass], (err, result) => {
            if (err) {
                res.json({ err: err});
            }
            if (result.rowCount > 0) {
                res.json({ message: "Login successful."});
            } else {
                res.json({ message: "Wrong username or password."});
            }
        })
        // const newUser = await pool.query("INSERT INTO auth VALUES($1,$2) RETURNING *", [iin, pass])        
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/register-patient", async (req, res) => {
    try {
    console.log(req.body);
    const {login, pass} = req.body;
    
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3000, () => {
    console.log("started on port 3000")
});