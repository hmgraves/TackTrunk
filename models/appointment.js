const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const servicesSchema = require('./service').schema;

const appointmentSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	service: servicesSchema,
	date: Date,
	time: String
}, {
	timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema)