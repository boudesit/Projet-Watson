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

// Watson api keys
var tradeoff_analytics = watson.tradeoff_analytics({
    username: 'beb36e63-3fb2-4866-a6da-eb3dbb697a47',
    password: 'OpZkJTpxCVCn',
    version: 'v1'
});
var paramsForTradeoff = require('problem.json');

var personality_insights = watson.personality_insights({
    username: '27d9073a-7cb4-4c31-a348-5fa11b84e094',
    password: 'zgo70NAkPdqh',
    version: 'v2'
});

var alchemy_language = watson.alchemy_language({
  api_key: '921795eb679fc45fa3b2d7ddfcbea46b41018602'
})
//////////////////////////////////////////////////////////////////////////


/// Start server ///
var sitePath = process.argv[2] || ".";
app.use(function(req, res, next) {
    console.log("Ressource chargé " + req.url);
    next();
});
console.log("dossier ressource : " + sitePath);
console.log("Starting server in: " + __dirname + '/' + sitePath);
app.use(express.static(__dirname + '/' + sitePath));
///


// Chargement de socket.io //
var server = app.listen(port);
var io = require('socket.io').listen(server);
///

///////////////// Socket.IO /////////////////////////
io.sockets.on('connection', function(socket) {
    console.log('Un client se connecte !');

    //////////// Tradeoff_analytics //////////////////
    tradeoff_analytics.dilemmas(paramsForTradeoff, function(error, resolution)
    {
        if (error)
        {
            console.log('error:', error);
        }
        else 
        {
            console.log(JSON.stringify(resolution, null, 2));
            var test = JSON.parse(JSON.stringify(resolution, null, 2));
            console.log("result =" + test);

            for (var prop in test)
            {
                console.log(prop + "---" + test[prop]);
                if (prop === 'resolution')
                {
                    for (var prop2 in test[prop])
                    {
                        console.log(test[prop][prop2]);
                    };
                }
            };
        }
    });
    //////////////////////////////////////////////////////

    //////////// personality_insights ////////////////////
    socket.on('personality_insights', function(message) {

        //c'est pour empecher les fail XSS (injection de codes)
        message = ent.encode(message);

        if (message != '')
        {
            personality_insights.profile
            (
                {
                    text: message,
                    language: 'en'
                },
                function(err, response)
                {
                    if (err)
                    {
                        JSON.parse(JSON.stringify(err, null, 2), function(k, v) {
                            if (k === 'error')
                            {
                                //console.log(k + " : " + v);
                                socket.emit('reponse_personality', v);
                            }
                        });
                    }
                    else
                    {
                        JSON.parse(JSON.stringify(response, null, 2), function(k, v) {
                            if (k === 'name' || k === 'percentage')
                            {
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

        alchemy_language.keywords(parameters, function (err, response)
        {
            if (err)
            {
              //console.log('error:', JSON.stringify(err , null, 2));
              socket.emit('reponse_alchemy_language',JSON.stringify(err , null, 2) );
            }
            else
            {
              var reponse = 'response : ';
              JSON.parse(JSON.stringify(response, null, 2), function(k, v) {
                  if ( k === 'text') {
                      //console.log(k + " : " + v);
                      reponse = reponse + " " +v+", ";

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
