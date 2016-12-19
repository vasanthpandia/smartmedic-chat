const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

const io = require('socket.io')(server.listener);

server.route({
  method: 'GET',
  path:'/hello',
  handler: function (request, reply) {
      console.log(server.listener);
      return reply('hello world');
  }
});

server.start((err) => {
  if (err) {
      throw err;
  }
  console.log('Server running at:', server.info.uri);
});
