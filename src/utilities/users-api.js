import { sendRequest } from "./SendRequest";

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

export {
	signUp,
	login,
	checkToken,
};