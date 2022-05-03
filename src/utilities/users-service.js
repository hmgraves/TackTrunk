import * as usersAPI from './users-api';

const signUp = async (userData) => {
	const token = await usersAPI.signUp(userData);
	// persist the "token"
	localStorage.setItem('token', token);
	return getUser();
};

const login = async (credentials) => {
	const token = await usersAPI.login(credentials);
	localStorage.setItem('token', token);
	return getUser();
}

const getToken = () => {
	// getItem returns null if there is no string
	const token = localStorage.getItem('token');
	if (!token) return null;
	// obtain the payload of the token
	const payload = JSON.parse(window.atob(token.split('.')[1]));
	if (payload.exp < Date.now() / 1000) {
		// token has expired - remove it from localStorage
		localStorage.removeItem('token');
		return null;
	};
	return token;
};

const checkToken = () => {
	return usersAPI.checkToken()
		.then(dateStr => new Date(dateStr));
};

const getUser = () => {
	const token = getToken();
	// If there is a token, return the user in the payload, otherwise return null
	return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
};

const logOut = () => {
	localStorage.removeItem('token');
};

export {
	signUp, 
	getToken,
	checkToken,
	getUser,
	logOut,
	login,
};