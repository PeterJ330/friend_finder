var path = require("path");

module.exports = function (app) {

    // ROUTE TO HOME PAGE
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // ROUTE TO SURVEY PAGE
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

  
};