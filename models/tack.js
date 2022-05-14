const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tackSchema = new Schema({
	name: {
		type: String, 
	},
	brand: String, 
	color: String, 
	size: {
		type: String,
		enum: ['Mini', 'Pony', 'Cob', 'Horse', 'Warmblood', 'Oversize', 'Small', 'Medium', 'Large', 'Other']
	}, 
	type: {
		type: String, 
		// ref: 'Category',
	}
});

module.exports = mongoose.model('Tack', tackSchema);