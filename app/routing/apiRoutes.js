
var friends = require("../data/friends");


module.exports = function(app) {
// All of objectArray
app.get("/api/friends", function(req, res) {
    res.json(friends);
});

// displays a single object in friendsData, or returns false
app.get("/api/friends/:friend", function(req, res) {
    var input = req.params.friend ;
    console.log(input);

    for (var i = 0; i < friends.length; i++) {
        if (input === friends[i].name) {
            return res.json(friends[i]);
        }
    }
    return res.json(false);
});


// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.


// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
app.post("/api/add-survey", function(req, res) {
    friends.push(req.body);
    res.json(true);
});


};