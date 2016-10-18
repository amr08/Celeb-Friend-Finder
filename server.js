	var express = require("express");
	var bodyParser = require("body-parser");
	var ApiRoutes = require("./app/routing/api-routes.js")
	var HtmlRoutes = require("./app/routing/html-routes.js");



	var PORT = 7000;

	var app = express();

//makes things organized
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// 
	HtmlRoutes(app);
	ApiRoutes(app);


//makes sure we are listening
	app.listen(PORT, function () {
		console.log('App listening on PORT ' + PORT);
	});

	