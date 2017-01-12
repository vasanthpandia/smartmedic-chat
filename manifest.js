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