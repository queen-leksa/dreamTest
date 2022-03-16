const router = require("express").Router();
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "test"
});


router.get("/", function(request, response) {
    response.send("<h1>API page</h1>");
});

router.get("/user/get/:id", function(req, res) {
    db.connect(function(err) {
        if (err) {
            res.send("ups...");
        } else {
            console.log("Connection success");
            res.send(`<h1>${req.params.id}</h1>`);
        }
    });
    db.end();
});

router.post("/user/add", function (req, res) {
    console.log(req.body);
    const query = `
        insert into users(name, email, pwd) values("${req.body.name}", "${req.body.email}", "${req.body.pwd}");
    `;
    db.query(query, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log("done");
            res.send("ok");
        }
    });
    db.end();
});


module.exports = router;