var express = require('express');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var watson = require('watson-developer-cloud');



var personality_insights = watson.personality_insights({

  username: '27d9073a-7cb4-4c31-a348-5fa11b84e094',

  password: 'zgo70NAkPdqh',

  version: 'v2'

});

var app = express();


// Définition de l'hote et du port

var host        = process.env.VCAP_APP_HOST || process.env.HOST || 'localhost';

var port        = process.env.VCAP_APP_PORT || process.env.PORT || 8080;

var sitePath = process.argv[2] || ".";

// Request logging
app.use(function(req, res, next) {
    console.log("Ressource chargé "+req.url);
    next();
});

// Start server
console.log("dossier ressource : "+sitePath);
console.log("Starting server in: " + __dirname + '/' + sitePath);
app.use(express.static(__dirname +'/' + sitePath));





app.listen(port, function() {
    console.log("Server running at: http://localhost:" + port)
});
