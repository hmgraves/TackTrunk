import { getToken } from "./users-service";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

const signUp = async (userData) => {
	return sendRequest(BASE_URL, 'POST', userData);
};

const login = async (credentials) => {
	return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
};

const checkToken = () => {
	return sendRequest(`${BASE_URL}/check-token`);
};

/* HELPER FUNCTIONS */
const sendRequest = async (url, method = "GET", payload = null) => {
	const options = { method };
	if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	};
	const token = getToken();
	if (token) {
		// Ensure the headers object exists
		options.headers = options.headers || {};
		// Add token to an Authorization header
		// Prefacing with 'Bearer' is recommended in the HTTP specification
		options.headers.Authorization = `Bearer ${token}`;
	}
	const res = await fetch(url, options);
	// res.ok will be false if the status code set to 4xx in the controller action
	if (res.ok) return res.json();
	throw new Error('Bad Request');
};

export {
	signUp,
	login,
	checkToken,
};