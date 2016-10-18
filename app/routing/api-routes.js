

  var friendsFile = require("../data/friends.js")


  var friendsArray = friendsFile.friends


  var ApiRoutes = function (app) {

    app.get('/api/friends', function (req, res) {
      res.json(friendsArray);
    });

    app.post('/api/friends', function (req, res) {
    
        friendsArray.push(req.body);

        res.json(true);
  
    });
  };

//shipping out to server.js
  module.exports = ApiRoutes;
