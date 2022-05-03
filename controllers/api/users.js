const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const create = async (req, res) => {
	try {
		const user = await User.create(req.body);
		// token will be a string
		const token = createJWT(user);
		// send back the token as a string
		// which we need to account for 
		// in the client
		res.json(token);
	} catch (e) {
		res.status(400).json(e);
	};
};

const login = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) throw new Error();
		const match = await bcrypt.compare(req.body.password, user.password);
		if (!match) throw new Error();
		res.json( createJWT(user) );
	} catch (err) {
		res.status(400).json('Bad Credentials');
	};
};

const checkToken = (req, res) => {
	// req.user will always be there for you when a token is sent
	console.log('req.user', req.user);
	res.json(req.exp);
};

/*-- Helper Functions --*/

const createJWT = (user) => {
	return jwt.sign(
		// data payload
		{ user },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}

module.exports = {
	create,
	login,
	checkToken,
};