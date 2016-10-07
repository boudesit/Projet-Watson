var socket = io.connect('http://localhost:8080');

socket.on('message', function(message) {

    alert('Le serveur a un message pour vous : ' + message);

})


$('#poke').click(function() {

    socket.emit('message', 'Salut serveur, ça va ?');

})

$('#watson').click(function() {
    console.log("submit as clicked with value " + $('textarea#message').val());
    socket.emit('personality_insights', $('textarea#message').val());
    return false;
});
