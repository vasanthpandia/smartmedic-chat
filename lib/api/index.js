const oauth = require('./oauth');

exports.register = (plugin, options, next) => {
  oauth(plugin);

  next();
};

exports.register.attributes = {
  name: 'api',
  version: '1.0'
};
