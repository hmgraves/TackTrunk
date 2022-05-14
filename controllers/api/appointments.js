const Appointment = require('../../models/appointment');


const create = async (req, res) => {
	req.body.user = req.user._id;
	const appointment = await Appointment.create(req.body);
	res.json(appointment);
};

const getAll = async (req, res) => {
	const appointment = await Appointment.find({'user': `${req.user._id}`});
	res.json(appointment);
};

const deleteOne = async (req, res) => {
	const deletedAppointment = await Appointment.findByIdAndRemove(req.params.id);
	res.json(deletedAppointment);
};

module.exports = {
	create,
	getAll,
	deleteOne,
};