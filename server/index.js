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
        const {iin, pass} = req.body;
        const newUser = await pool.query("INSERT INTO auth VALUES($1,$2) RETURNING *", [iin, pass])
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/register-patient", async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(5000, () => {
    console.log("started on port 5000")
});