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



app.get('/', function(req, res) {

    res.render('index.ejs');

})


.post('/', urlencodedParser, function(req, res) {

    if (req.body.message != '') {

      personality_insights.profile({
        text: 'req.body.message',
        language: 'en' },
        function (err, response) {
            if (err)
            {
              res.render('index.ejs', {
                'personality': JSON.stringify(err, null, 2)
              })
            }
            else
            {
              res.render('index.ejs', {
                'personality': JSON.stringify(response, null, 2)
              })
            }
        })}
})


.listen(port, host);
