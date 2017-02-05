const Hapi = require('hapi');
const Glue = require('glue');
const dotenv = require('dotenv');
const config = require('./config');

if (config.isDevelopment) dotenv.config();

Glue.compose(require('./manifest'), { relativeTo: __dirname }, (err, server) => {
  if (err) {
    console.log('server.register err:', err);

    throw (err);
  }

  server.on('request-error', (request, error) => {
    console.log(error);
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply.redirect('/api/chat')
    }
  })

  server.start(() => {
    console.log(`✅  Server is listening on ${server.info.uri.toLowerCase()}`);
  });
});
