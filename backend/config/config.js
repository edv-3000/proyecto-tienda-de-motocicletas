const {Pool} = require("pg")

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database:"motorbike",
    password:"123456"
})

module.exports = {pool}