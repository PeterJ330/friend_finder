
// All of objectArray
app.get("/api/objectArray", function(req, res) {
    return res.json(friendsData);
});

// displays a single object in objectArray, or returns false
app.get("/api/objecArray/:object", function(req, res) {
    var input = req.params.object ;
    console.log(input);

    for (var i = 0; i < friendsData.length; i++) {
        if (input === friendsData[i].routeName) {
            return res.json(friendsData[i]);
        }
    }
    return res.json(false);
});

// GET route to /survey to display the survey page.
app.get("/survey", function(req, res) {
    res.send("welcom to survey page");
    res.sendFile(path.join("app", "public", "home.html"));
});


// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 



