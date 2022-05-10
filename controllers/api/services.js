const Service = require('../../models/service');

const getAll = async (req, res) => {
	const service = await Service.find({});
	res.json(service);
};

module.exports = {
	getAll
};