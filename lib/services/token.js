const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

const token = {
  generateToken: function(payload = {}) {
    return jwt.sign({ profile: payload }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '7d' })
  }
}

module.exports = token;
