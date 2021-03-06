const oauth = require('./oauth');
const chat = require('./chat');

exports.register = (plugin, options, next) => {
  oauth(plugin);
  chat(plugin);

  next();
};

exports.register.attributes = {
  name: 'api',
  version: '1.0'
};
