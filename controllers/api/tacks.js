const Tack = require('../../models/tack');

const create = async (req, res) => {
	req.body.user = req.user._id;
	const tack = await Tack.create(req.body);
	res.json(tack);
};

const getAll = async (req, res) => {
	const tack = await Tack.find({'user': `${req.user._id}`});
	res.json(tack);
};

const deleteOne = async (req, res) => {
	const deletedTack = await Tack.findByIdAndRemove(req.params.id)
	console.log(deletedTack)
	res.json(deletedTack);
};

module.exports = {
	create,
	getAll,
	deleteOne,
};