const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  type: String,
  startDateTime: Date,
  endDateTime: Date

}, {
  timestamps: true
});

const ModelClass = mongoose.model('booking', bookingSchema);
module.exports = ModelClass;
