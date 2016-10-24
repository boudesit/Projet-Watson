var socket = io.connect('http://localhost:8080');

socket.on('reponse_personality', function(data) {
    alert('votre personalité : ' + data);
})

$('#watson').click(function() {
    console.log("submit as clicked with value " + $('textarea#message').val());
    socket.emit('personality_insights', $('textarea#message').val());
    return false;
})

socket.on('reponse_alchemy_language', function(data) {
    alert('alchemy_language : ' + data);
})

$('#watson2').click(function() {
    console.log("submit as clicked with value " + $('textarea#message2').val());
    socket.emit('alchemy_language', $('textarea#message2').val());
    return false;
})

function personality_insights(text) {
    var socket = io.connect('http://localhost:8080');
    console.log("personality_insights methode text : " + text + '-------' + response);
    response.personality_insights = 'waiting';
    socket.emit('personality_insights', text)
        .on('reponse_personality', function(data) {
            response.personality_insights = data;
            console.log("ce que renvoi le serveur" + data);
        })

    console.log("en dehors du on a : " + socket.data);
    return socket.data;
};

function alchemy_language(text) {
    var socket = io.connect('http://localhost:8080');
    console.log("alchemy_language text : " + text);
    response.alchemy_language = 'waiting';
    socket.emit('alchemy_language', text)
        .on('reponse_alchemy_language', function(data) {
            response.alchemy_language = data;
            console.log("ce que renvoi le serveur" + data);
        })

    console.log("en dehors du on a : " + socket.data);
    return socket.data;
};

function getListCV(jsonString) {
    var socket = io.connect('http://localhost:8080');
    socket.emit('tradeOff', jsonString);
    return 'NA';
};

function retrieveInfo() {
    var socket = io.connect('http://localhost:8080');
    socket.emit('retrieveListCV', 'NA').on('catchListCV',function(listCv){
        response.listCv=listCv;
    });
    return  response.listCv;
};

function clearList() {
    var socket = io.connect('http://localhost:8080');
    socket.emit('clearList', 'NA');
};