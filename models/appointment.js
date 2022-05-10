const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const servicesSchema = require('./service').schema;

const appointmentSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	services: [servicesSchema],
	date: Date
}, {
	timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema)