const friends = require("../data/friends");

module.exports = function(app) {

    app.get('/api/friends', function(req,res) {
        res.json(friends);
    });
  
    app.post('/api/new', function(req,res) {
    
        var scoreDifference;
        var friendScore;
        var userScore;
        var newFriend = req.body;

        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: Infinity
        };

        for(var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            scoreDifference = 0;
        
            for (var j = 0; j < newFriend.scores.length; j++) {
                friendScore = currentFriend.scores[j];
                
                userScore = newFriend.scores[j];
                scoreDifference  += Math.abs(parseInt(userScore) - parseInt(friendScore));
            } 

            if (scoreDifference <= bestMatch.friendDiff){
                bestMatch.name =currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDiff = scoreDifference ;
            }
        } 

        res.json(bestMatch);

    });
};
