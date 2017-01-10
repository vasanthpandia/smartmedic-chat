const mongoose = require('./mongoose');

const Schema = mongoose.Schema;
const prescriptionSchema = new Schema({
  appointment_id: Schema.Types.ObjectId
});

const prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = prescription;
