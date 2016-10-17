

var friendsFile = require("../data/friends.js")


var friendsArray = friendsFile.friends


var ApiRoutes = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendsArray);
  });

  app.post('/api/friends', function (req, res) {
  //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  //   // It will do this by sending out the value "true" have a table
    
      friendsArray.push(req.body);

      res.json(true); // KEY LINE
  //   } 
  });
};

module.exports = ApiRoutes;
