const mongoose = require('./mongoose');
const userSchema = require('./userSchema');

const doctorSchema = userSchema.extend({
  education: String,
  experience: String,
  specialization: String
});

const doctor = mongoose.model('Doctor', doctorSchema);

module.exports = doctor;
