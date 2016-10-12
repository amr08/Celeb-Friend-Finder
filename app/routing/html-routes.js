

//setting up routes for HTML

	var HtmlRoutes = function(){
		
		app.get('/', function (req, res) {
			res.sendFile(path.join(__dirname, '/app/public/home.html'));
		});

		app.get('/survey', function (req, res) {
				res.sendFile(path.join(__dirname, '/app/public/survey.html'));
		});

		console.log("api routes linked")

	};


	module.exports = HtmlRoutes;