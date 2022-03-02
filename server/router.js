const router = require("express").Router();

router.get("/", function(request, response) {
    response.render("index");
});
router.get("/auth", function(request, response) {
    response.render("auth", {
        name: "Svyat. Ping... ",
        data: ["name", "password"]
    });
});

module.exports = router;