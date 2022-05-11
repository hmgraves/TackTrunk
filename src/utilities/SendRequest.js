import { getToken } from "./users-service";

/* HELPER FUNCTION for users-api and services-api */
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
	sendRequest,
};