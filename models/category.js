const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
	name: {
		type: String,
		enum: ['Bridles', 'Saddles', 'Saddle Accessories', 'Boots', 'Blankets', 'Misc.', 'Grooming'],
		required: true
	},
	sortOrder: Number
}, {
	timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
