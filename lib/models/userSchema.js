const mongoose = require('./mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: String,
  encrypted_password:  String,
  reset_password_token: String,
  reset_password_sent_at: Date,
  remember_created_at: Date,
  sign_in_count: Number,
  current_sign_in_at: Date,
  last_sign_in_at: Date,
  current_sign_in_ip: String,
  last_sign_in_ip: String,
  first_name: String,
  last_name: String,
  phone_number: String,
  date_of_birth: Date
}, {
  collection : 'users',
  discriminatorKey : '_type'
});

module.exports = userSchema;
