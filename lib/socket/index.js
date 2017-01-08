const chat = require('./chat');

exports.register = (plugin, options, next) => {
  const io = require('socket.io')(plugin.listener);
  chat(io);

  next();
}

exports.register.attributes = {
  name: 'socket',
  version: '1.0'
}
