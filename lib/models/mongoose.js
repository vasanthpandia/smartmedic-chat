const mongoose = require('mongoose');
require('mongoose-schema-extend');

mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose;
