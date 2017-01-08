const config = {
  isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production'
}

module.exports = config;
