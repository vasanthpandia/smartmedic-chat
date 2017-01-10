const mongoose = require('./mongoose');

const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
  start_time: Date,
  duration: Number,
  visit_id: String,
  doctor_id: Schema.Types.ObjectId,
  patient_id: Schema.Types.ObjectId
});

const appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = appointment;
