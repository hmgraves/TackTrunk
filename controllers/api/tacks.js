const Tack = require('../../models/tack');

const create = (req, res) => {
	Tack.findById(req.params.id, (err, tack) => {
		tack.save((err) => {
			res.redirect()
		});
	});
};

const deleteTack = (req, res) => {
	Tack.findOneAndRemove({_id: req.params.id}, (err, tack) => {
		if (err) {
			res.redirect('/tack')
		}
		res.redirect('/tack')
	})
};

module.exports = {
	create,
	delete: deleteTack,
};