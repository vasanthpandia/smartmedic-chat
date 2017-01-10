const mongoose = require('./mongoose');

const Schema = mongoose.Schema;
const drugSchema = new Schema({
  name: String,
  dose: Schema.Types.Mixed,
  notes: String
});

const drug = mongoose.model('Drug', drugSchema);

module.exports = drug;
