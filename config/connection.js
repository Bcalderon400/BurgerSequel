const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Theboss420!",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        return console.error("Error connecting to database.");
    }
});

module.exports = connection;