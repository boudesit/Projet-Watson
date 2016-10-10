var socket = io.connect('http://localhost:8080');

socket.on('message', function(message) {

    alert('Le serveur a un message pour vous : ' + message);

})

socket.on('reponse_personality', function(data) {
    console.log(data);
    alert('votre personalité : ' + data);
})

$('#poke').click(function() {
    socket.emit('message', 'Salut serveur, ça va ?');
})

$('#watson').click(function() {
    console.log("submit as clicked with value " + $('textarea#message').val());
    socket.emit('personality_insights', $('textarea#message').val());
    return false;
})

function personality_insights(text) {
    var socket = io.connect('http://localhost:8080');
    console.log("personality_insights methode text : " + text+'-------'+response);
    response.personality_insights='waiting';
    socket.emit('personality_insights', text)
        .on('reponse_personality', function(data) {
            console.log("ici la valeur de data" + response.personality_insights);
            response.personality_insights = data;
            console.log("ce que renvoi le serveur" + data);

        })

    console.log("en dehors du on " + socket.data);
    return socket.data;
};
