const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
	name: {
		type: String, 
		required: true
	},
	price: {
		type: String,
	},
}, {
	timestamps: true 
});

module.exports = mongoose.model('Service', serviceSchema);
