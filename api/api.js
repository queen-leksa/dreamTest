const router = require("express").Router();

const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    port: "3312",
    user: "root",
    password: "Qwerty123"
});

router.get("/", function(request, response) {
    connection.connect(function(err) {
        if (err) {
            console.log("DB Danger!");
        } else {
            console.log("DB Success");
        }
    })
    response.send("<h1>API page</h1>");
});

module.exports = router;