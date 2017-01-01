const Hapi = require('hapi');
const rp = require('request-promise');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

const io = require('socket.io')(server.listener);

server.route({
  method: 'GET',
  path:'/status',
  handler: function (request, reply) {
      console.log(server.listener);
      return reply(`You've reached SmartMedic`);
  }
});

server.route({
  method: 'POST',
  path: '/login',
  handler: function(request, reply) {
    const params = JSON.parse(request.payload);

    rp({
      url: process.env.LOGIN_URL,
      method: `POST`,
      form: {
        email: `${params['email']}`,
        password: `${params['password']}`
      }
    }).then(response => {
      reply(response);
    }).catch(error => {
      reply(error);
    })
  }
})

server.start((err) => {
  if (err) {
      throw err;
  }
  console.log('Server running at:', server.info.uri);
});
