const config = {
  manifest: {
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
  },
  isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}

module.exports = config;
