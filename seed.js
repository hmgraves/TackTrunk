require('dotenv').config();
require('./config/database');

const Service = require('./models/service');

(async function() {
	await Service.deleteMany({});
	const services = await Service.create([
		{
			name: '30 minute lesson with Heidi',
			sortOrder: 10
		},
		{
			name: '30 minute lesson with Deisy',
			sortOrder: 20
		},
		{
			name: '30 minute lesson with Hannah',
			sortOrder: 30
		},
	])
	console.log(services);
	process.exit();
})();