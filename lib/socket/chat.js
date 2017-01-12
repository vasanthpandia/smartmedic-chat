const socketioJwt   = require("socketio-jwt");
const Doctor = require('../models/doctor');

module.exports = io => {
  io.use(socketioJwt.authorize({
    secret: process.env.JWT_SECRET,
    handshake: true
  }));

  io.on('connection', socket => {
    profile = JSON.parse(socket.decoded_token.profile);
    Doctor.update({ email: profile.email }, { $set: { status: true }}).then(result => {
      socket.emit("Connection Successful");
    });

    socket.on('chatMessage', (data) => {
      console.log(data);
    });

    socket.on('disconnect', () => {
      Doctor.update({ email: profile.email }, { $set: { status: false }}).then((result) => {
        console.log("User Disconnected");
      })
    });
  });
}
