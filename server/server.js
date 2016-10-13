/// Node module ///
var express = require('express');
var app = express();
var ent = require('ent');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var watson = require('watson-developer-cloud');
///


////////////////// Parameters ///////////////////////////////////////
// Définition de l'hote et du port
var host = process.env.VCAP_APP_HOST || process.env.HOST || 'localhost';
var port = process.env.VCAP_APP_PORT || process.env.PORT || 8080;


var listOfCV = [];
// Watson api keys
var tradeoff_analytics = watson.tradeoff_analytics({
    username: 'beb36e63-3fb2-4866-a6da-eb3dbb697a47',
    password: 'OpZkJTpxCVCn',
    version: 'v1'
});
var paramsForTradeoff = require(__dirname + "/" + "bdd" + "/" + "problem.json");
//includeInThisContext(__dirname+"/models/car.js");
var personality_insights = watson.personality_insights({
    username: '27d9073a-7cb4-4c31-a348-5fa11b84e094',
    password: 'zgo70NAkPdqh',
    version: 'v2'
});

var alchemy_language = watson.alchemy_language({
        api_key: '921795eb679fc45fa3b2d7ddfcbea46b41018602'
    })
    //////////////////////////////////////////////////////////////////////////
var launchTradeOff = function(error, resolution) {
    if (error) {
        console.log('error:', error);
    } else {
        // console.log(JSON.stringify(resolution, null, 2));
        var test = JSON.parse(JSON.stringify(resolution, null, 2));
        // console.log("result =" + test);
        var optionArray = [];
        var columArray = [];
        var indexToRemove = 0;
        var arrayToKeepFinal = [];
        //récupération des colums et options pour relancer la demande aprés 
        for (var prop in test) {
            if (prop === 'problem') {
                for (var prop2 in test[prop]) {
                    if (prop2 === 'columns') {
                        columArray = test[prop][prop2];
                    }
                    if (prop2 === 'options') {
                        optionArray = test[prop][prop2];
                    }
                };
            }
            if (prop === 'resolution') {
                for (var prop2 in test[prop]) {
                    for (var i = 0; i < test[prop][prop2].length; i++) {
                        if (test[prop][prop2][i].status === "FRONT") {
                            indexToRemove = test[prop][prop2][i].solution_ref;
                        }
                    }
                };

            }

            var arrayToKeep = [];
            for (var i = 0; i < optionArray.length; i++) {
                // console.log(optionArray[i].key);
                if (optionArray[i].key != indexToRemove) {
                    arrayToKeep.push(optionArray[i]);
                } else {
                    console.log(optionArray[i]);
                    listOfCV.push(optionArray[i]);
                }
            }
            arrayToKeepFinal = arrayToKeep;


        };
        // console.log("columns array with " + JSON.stringify(columArray, null, 2));
        var col = JSON.stringify(columArray, null, 2);
        //console.log("Option array with " + JSON.stringify(optionArray, null, 2));
        // console.log("Array to keep with " + JSON.stringify(arrayToKeepFinal, null, 2));
        var opt = JSON.stringify(arrayToKeepFinal, null, 2);
        var newJson = "{ \"subject\": \"CV\",\"generate_visualization\": false, \"columns\":" + col + " , \"options\": " + opt + "}";
        //console.log("{ \"subject\": \"CV\",\"generate_visualization\": false, \"columns\":" + col + " , \"options\": " + opt + "}");
        console.log(arrayToKeepFinal.length);
        if (arrayToKeepFinal.length === 0) {
            return;
        } else {
            callTradeof(newJson);
        }

    }
};

var callTradeof = function(jsonString) {
    console.log(jsonString);
    if (jsonString === "NA") {
        tradeoff_analytics.dilemmas(paramsForTradeoff, launchTradeOff);
    } else {
        var tmp = JSON.parse(jsonString);
        tradeoff_analytics.dilemmas(tmp, launchTradeOff);
    }
}

/// Start server ///
app.use(function(req, res, next) {
    console.log("Ressource chargé " + req.url);
    next();
});
console.log("Starting server in: " + __dirname + '/' + "ressources");
app.use(express.static(__dirname + '/' + "ressources"));
///


// Chargement de socket.io //
var server = app.listen(port);
var io = require('socket.io').listen(server);
///

///////////////// Socket.IO /////////////////////////
io.sockets.on('connection', function(socket) {
        console.log('Un client se connecte !');

        //////////// Tradeoff_analytics //////////////////
        socket.on('tradeOff', callTradeof);
        socket.on('retrieveListCV',function(){
            console.log("in retrieve");
            socket.emit('catchListCV',listOfCV)
        });

        //////////////////////////////////////////////////////

        //////////// personality_insights ////////////////////
        socket.on('personality_insights', function(message) {

            //c'est pour empecher les fail XSS (injection de codes)
            message = ent.encode(message);

            if (message != '') {
                personality_insights.profile({
                        text: message,
                        language: 'en'
                    },
                    function(err, response) {
                        if (err) {
                            JSON.parse(JSON.stringify(err, null, 2), function(k, v) {
                                if (k === 'error') {
                                    //console.log(k + " : " + v);
                                    socket.emit('reponse_personality', v);
                                }
                            });
                        } else {
                            JSON.parse(JSON.stringify(response, null, 2), function(k, v) {
                                if (k === 'name' || k === 'percentage') {
                                    //console.log(k + " : " + v);
                                    socket.emit('reponse_personality', v);
                                }
                            });
                        }
                    }
                )
            }
        });
        ////////////////////////////////////////////////////////

        /////////// alchemy_language //////////////////////////
        socket.on('alchemy_language', function(message) {

            //c'est pour empecher les fail XSS (injection de codes)
            message = ent.encode(message);

            var parameters = {
                extract: 'keywords',
                sentiment: 1,
                maxRetrieve: 4,
                text: message
            };

            alchemy_language.keywords(parameters, function(err, response) {
                if (err) {
                    //console.log('error:', JSON.stringify(err , null, 2));
                    socket.emit('reponse_alchemy_language', JSON.stringify(err, null, 2));
                } else {
                    var reponse = 'response : ';
                    JSON.parse(JSON.stringify(response, null, 2), function(k, v) {
                        if (k === 'text') {
                            //console.log(k + " : " + v);
                            reponse = reponse + " " + v + ", ";

                        }
                    });
                    socket.emit('reponse_alchemy_language', reponse);
                }
            })
        });
        //////////////////////////////////////////////////////////////
    })
    ///////////////////////////////////////////////////////////////////////

console.log("Server running at: http://localhost:" + port);