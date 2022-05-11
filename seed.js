require('dotenv').config();
require('./config/database');

const Service = require('./models/service');

(async function() {
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
	console.log(services);
	process.exit();
})();