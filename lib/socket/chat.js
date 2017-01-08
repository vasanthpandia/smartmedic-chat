const socketioJwt   = require("socketio-jwt");

module.exports = io => {
  io.use(socketioJwt.authorize({
    secret: process.env.JWT_SECRET,
    handshake: true
  }));

  io.on('connection', socket => {
    console.log("User connected", socket.decoded_token.profile);

    socket.on('chatMessage', (data) => {
      console.log(data);
    });

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });
}
