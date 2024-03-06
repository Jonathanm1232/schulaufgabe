const mysql = require("mysql");
const dbConfig = require("../config/configdb.js");

// Erzeugen einer Datenbank verbindung
const connection = mysql.createConnection({
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
    }
);

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully Connected to DB")
})

module.exports = connection;