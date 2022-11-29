const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "dotabuff1337",
    host: "db.htsnloejsriyzzkgdndf.supabase.co",
    port: 5432,
    database: "postgres"
});

module.exports = pool;