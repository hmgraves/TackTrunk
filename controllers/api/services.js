const Service = require('../../models/service');

const getAll = async (req, res) => {
	const service = await Service.find({});
	console.log(service)
	res.json(service);
};

module.exports = {
	getAll
};