var express = require('express');
var app = express();
var ent = require('ent');
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

var tradeoff_analytics = watson.tradeoff_analytics({
    username: 'beb36e63-3fb2-4866-a6da-eb3dbb697a47',
    password: 'OpZkJTpxCVCn',
    version: 'v1'
});

var launchTradeOff = function(error, resolution) {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.stringify(resolution, null, 2));
        var test = JSON.parse(JSON.stringify(resolution, null, 2));
        console.log("result =" + test);
        for (var prop in test) {
            console.log(prop + "---" + test[prop]);

            if (prop === 'problem') {
                for (var prop2 in test[prop]) {
                    console.log("in val : " + prop2 + "--" + test[prop][prop2][1].status);
                    if (prop2 === 'options') {
                        for (var i = 0; i < test[prop][prop2].length; i++) {
                            console.log(JSON.stringify(test[prop][prop2][i],null,2));
                        }
                    }
                };
            }

            if (prop === 'resolution') {
                for (var prop2 in test[prop]) {
                    console.log("in val : " + prop2 + "--" + test[prop][prop2][1].status);
                    console.log(" val = " + test[prop][prop2]);
                    var arrayToKeep = [];
                    for (var i = 0; i < test[prop][prop2].length; i++) {
                        if (test[prop][prop2][i].status != "FRONT") {
                            arrayToKeep.push(test[prop][prop2][i]);
                        }
                        console.log("in loop" + test[prop][prop2][i]);
                    }
                    console.log(arrayToKeep);

                };

            }
        };


    }
};

var alchemy_language = watson.alchemy_language({
    api_key: '921795eb679fc45fa3b2d7ddfcbea46b41018602'
})

var paramsForTradeoff = require('problem.json');

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

    console.log('Un client se connecte !');

    socket.on('tradeOff', function() {
        tradeoff_analytics.dilemmas(paramsForTradeoff, launchTradeOff);
    });

    socket.on('personality_insights', function(message) {

        //c'est pour empecher les fail XSS (injection de codes)
        message = ent.encode(message);

        console.log("Allo Watson c'est quoi ma personality_insights pour se texte : " + message);
        if (message != '') {

            personality_insights.profile({
                    text: message,
                    language: 'en'
                },
                function(err, response) {
                    if (err) {
                        JSON.parse(JSON.stringify(err, null, 2), function(k, v) {
                            if (k === 'error') {
                                console.log(k + " : " + v);
                                socket.emit('reponse_personality', v);
                            }
                        });
                    } else {
                        //console.log(JSON.stringify(response, null, 2));
                        JSON.parse(JSON.stringify(response, null, 2), function(k, v) {
                            if (k === 'name' || k === 'percentage') {
                                console.log(k + " : " + v);
                                socket.emit('reponse_personality', v);
                            }
                        });


                    }
                })
        }
    });

    socket.on('alchemy_language', function(message) {
        var parameters = {
            extract: 'keywords',
            sentiment: 1,
            maxRetrieve: 4,
            text: message
        };
        alchemy_language.keywords(parameters, function(err, response) {
            if (err) {
                console.log('error:', err);
                socket.emit('reponse_alchemy_language', err);
            } else {
                console.log(JSON.stringify(response, null, 2));
                socket.emit('reponse_alchemy_language', JSON.stringify(response, null, 2));
            }
        })
    });
})


console.log("Server running at: http://localhost:" + port);