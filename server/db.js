const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "HAvd#6K9Nmu3WzN",
    host: "db.rzgwtdlunzjundtgcdti.supabase.co",
    port: 5432,
    database: "postgres"
});

module.exports = pool;