const manifest = {
  connections: [
    {
      host: process.env.HOST,
      port: process.env.PORT,
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
      plugin: 'vision'
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