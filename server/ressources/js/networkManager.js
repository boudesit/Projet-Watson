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

function personality_insights(text)
{
  var socket = io.connect('http://localhost:8080');
  console.log("personality_insights methode text : "+text);

  socket.emit('personality_insights', text);
  
  socket.data = "temp";

  socket.on('reponse_personality', function(data) {
        socket.data = data;
        console.log(socket.data);
  })

  console.log(socket.data);
  return socket.data + "t";
};
