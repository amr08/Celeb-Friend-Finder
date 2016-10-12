var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 7000;

//makes things organized
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//setting up routes for AJAX
	app.get('/', function (req, res) {
		// res.send('Welcome to the Star Wars Page!')
		res.sendFile(path.join(__dirname, '/app/public/home.html'));
	});

	app.get('/survey', function (req, res) {
			// res.send('Welcome to the Star Wars Page!')
			res.sendFile(path.join(__dirname, '/app/public/survey.html'));
	});

//makes sure we are listening
	app.listen(PORT, function () {
		console.log('App listening on PORT ' + PORT);
	});