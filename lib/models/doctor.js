const mongoose = require('./mongoose');

const Schema = mongoose.Schema;
const doctorSchema = new Schema({
  email: String,
  first_name: String,
  last_name: String,
  phone_number: String,
  date_of_birth: Date,
  education: String,
  experience: String,
  specialization: String
});

const doctor = mongoose.model('Doctor', doctorSchema);

module.exports = doctor;
