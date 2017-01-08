const dbUrl = process.env.DB_URL;

const manifest = {
  connections: [
    {
      host: 'localhost',
      port: 8000,
      routes: {
        cors: true
      }
    }
  ],
  registrations: [
    {
      plugin: 'inert'
    },
    {
      plugin: {
        register: "hapi-mongo-models",
        options: {
          mongodb: {
            uri: dbUrl,
            options: {}
          },
          autoIndex: false
        }
      }
    },
    {
      plugin: './lib/api',
      options: {
        routes: {
          prefix: '/api'
        }
      }
    },
    {
      plugin: './lib/socket'
    }
  ]
}

module.exports = manifest;