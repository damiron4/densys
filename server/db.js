const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "adm11n",
    host: "localhost",
    port: 5432,
    database: "densys"
});

module.exports = pool;