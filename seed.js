require('dotenv').config();
require('./config/database');

const Service = require('./models/service');
const Category = require('./models/category');

(async function() {
	await Category.deleteMany({});
  	const categories = await Category.create([
		{name: 'Bits', sortOrder: 10},
		{name: 'Blankets', sortOrder: 20},
		{name: 'Bridles', sortOrder: 30},
		{name: 'Girths', sortOrder: 40},
		{name: 'Saddles', sortOrder: 50},
		{name: 'Saddle Pads', sortOrder: 60},
		{name: 'Misc', sortOrder: 70},
	]);

	await Service.deleteMany({});
	const services = await Service.create([
		{
			name: '30 minute lesson with Heidi',
			price: '$100',
			sortOrder: 10
		},
		{
			name: '30 minute lesson with Deisy',
			price: '$100',
			sortOrder: 20
		},
		{
			name: '30 minute lesson with Hannah',
			price: '$100',
			sortOrder: 30
		},
	])
	process.exit();
})();

