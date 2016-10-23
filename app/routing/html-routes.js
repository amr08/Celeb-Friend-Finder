

  var path = require("path");

//setting up routes for HTML
  var HtmlRoutes = function(app){
    
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    console.log("html routes linked")

  };

//shipping out to server.js
  module.exports = HtmlRoutes;