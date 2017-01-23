const mongoose = require('mongoose');
require('mongoose-schema-extend');

mongoose.connect(process.env.DB_URL);

module.exports = mongoose;
