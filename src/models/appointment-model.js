const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    date: String,
    massageType: String,
    status: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
