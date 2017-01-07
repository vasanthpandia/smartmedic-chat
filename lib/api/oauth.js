const Joi = require('joi');
const rp = require('request-promise');
const token = require('../services/token');

module.exports = plugin =>
  plugin.route([
    {
      method: 'POST',
      path: '/oauth/token',
      config: {
        validate: {
          payload: {
            email: Joi.string().required().email(),
            password: Joi.string().required()
          }
        }
      },
      handler(request, reply) {
        const params = request.payload;

        rp({
          url: process.env.LOGIN_URL,
          method: `POST`,
          form: {
            email: `${params['email']}`,
            password: `${params['password']}`
          }
        })
        .then(response => token.generateToken(response))
        .then(token => {
          reply(token);
        })
        .catch(error => {
          reply({ error: error.message }).code(400);
        })
      }
    }
  ]);
