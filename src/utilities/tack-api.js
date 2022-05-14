import { sendRequest } from "./SendRequest";

const BASE_URL = '/api/tacks';

const getAll = () => {
	return sendRequest(`${BASE_URL}/tack`);
};

const addTack = (tack) => {
	console.log(tack)
	return sendRequest(`${BASE_URL}`, 'POST', {tack});
};

const deleteTack = (id) => {
	console.log(id)
	return sendRequest(`${BASE_URL}/tack/${id}`, 'DELETE', {id});
};

export {
	getAll,
	addTack,
	deleteTack,
};