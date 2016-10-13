
var friends = {
  Ahmed: {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [5,1,4,4,5,1,2,5,4,1]   
  }

};

var ApiRoutes = function(app) {

    app.get('/api/friends', function (req, res) {
        var chosen = req.params.friends;

        console.log(chosen);

        var compatibleFriend = friends[chosen];

        if (compatibleFriend) {
           return res.json(compatibleFriend);
        }
    });

};

// var postRoutes = function(app,answers) {

//       app.post('/api/friends', function (req, res) {
//         // req.body hosts is equal to the JSON post sent from the user
//         var friendResults = req.body;

//         console.log(friendResults);

//         // We then add the json the user sent to the character array
//         answers.push(friendResults);

//         // We then display the JSON to the users
//         res.json(friendResults);
//       });
// };


module.exports = ApiRoutes;