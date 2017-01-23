const mongoose = require('./mongoose');
const userSchema = require('./userSchema');

const patientSchema = userSchema.extend({
  known_medical_conditions: String
});

const patient = mongoose.model('Patient', patientSchema);

module.exports = patient;
