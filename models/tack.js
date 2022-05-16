const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tackSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	name: {
		type: String, 
	},
	brand: String, 
	color: String, 
	size: {
		type: String,
		enum: ['Mini', 'Pony', 'Cob', 'Horse', 'Warmblood', 'Oversize', 'Small', 'Medium', 'Large', 'Other']
	}, 
	category: {
		type: String,
		enum: ['Bits', 'Blankets', 'Bridles', 'Girths', 'Saddles', 'Saddle Pads', 'Misc.']
	}
});

module.exports = mongoose.model('Tack', tackSchema);