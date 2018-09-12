
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.send("welcom to home page");
    res.sendFile(path.join("app", "public", "home.html"));
});
