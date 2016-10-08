var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// Définition de l'hote et du port
var host = process.env.VCAP_APP_HOST || process.env.HOST || 'localhost';
var port = process.env.VCAP_APP_PORT || process.env.PORT || 8080;

var watson = require('watson-developer-cloud');

var personality_insights = watson.personality_insights({

    username: '27d9073a-7cb4-4c31-a348-5fa11b84e094',

    password: 'zgo70NAkPdqh',

    version: 'v2'

});


var sitePath = process.argv[2] || ".";

// Request logging
app.use(function(req, res, next) {
    console.log("Ressource chargé " + req.url);
    next();
});

// Start server
console.log("dossier ressource : " + sitePath);
console.log("Starting server in: " + __dirname + '/' + sitePath);
app.use(express.static(__dirname + '/' + sitePath));


// Chargement de socket.io
var server = app.listen(port);
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function(socket) {

    socket.emit('message', 'Vous êtes bien connecté !');
    console.log('Un client se connecte !');

    // Quand le serveur reçoit un signal de type "message" du client
    socket.on('message', function(message) {
        console.log('Un client me parle ! Il me dit : ' + message);
    });


    socket.on('personality_insights', function(message) {
        console.log("Allo Watson c'est quoi ma personality_insights pour se texte : " + message);
        if (message != '') {

            personality_insights.profile({
                    text: message,
                    language: 'en'
                },
                function(err, response) {
                    if (err) {
                        console.log(JSON.stringify(err, null, 2));
                        /*
              res.render('index.html', {
                'personality': JSON.stringify(err, null, 2)
              })

            */
                    } else {
                        //console.log(JSON.stringify(response, null, 2));
                        JSON.parse(JSON.stringify(response, null, 2), function(k, v) {
                          if (k ==='name' || k ==='percentage'){
                            console.log(k + " : " + v);
                            }
                        });
                        /*
                        res.render('index.html', {
                          'personality': JSON.stringify(response, null, 2)
                        })
                        */
                    }
                })
        }

    });

})


console.log("Server running at: http://localhost:" + port);
