const Appointment = require('../../models/appointment');


const create = async (req, res) => {
	req.body.user = req.user._id;
	const appointment = await Appointment.create(req.body);
	res.json(appointment);
};

const getAll = async (req, res) => {
	const appointment = await Appointment.find({'user': `${req.user._id}`});
	res.json(appointment);
}

const deleteOne = async (req, res) => {
	const appointment = await Appointment.findOneAndDelete(req.body);
	res.json(appointment);
}

module.exports = {
	create,
	getAll,
	deleteOne,
};