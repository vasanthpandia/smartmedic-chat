const _ = require('lodash');
const socketioJwt   = require("socketio-jwt");
const Doctor = require('../models/doctor');

let users = {};

module.exports = io => {
  io.use(socketioJwt.authorize({
    secret: process.env.JWT_SECRET,
    handshake: true
  }));

  io.on('connection', socket => {
    profile = JSON.parse(socket.decoded_token.profile);
    Doctor.findOne({ email: profile.email }).then(result => {
      socket.email = result.get('email')
      users[socket.email] = socket;
      socket.emit("Connection Successful");
    });

    socket.on('listUsers', () => {
      const userList = Object.keys(users);
      const index = userList.indexOf(socket.email);
      userList.splice(index, 1);

      socket.emit('userList', userList);
    });

    socket.on('chatMessage', (data) => {
      if (('to' in data) && (data.to in users)) {
        users[data.to].emit('newMessage', data.message);
      }
    });

    socket.on('disconnect', () => {
      delete users[socket.email];
    });
  });
}
