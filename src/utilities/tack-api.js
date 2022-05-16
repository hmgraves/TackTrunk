import { sendRequest } from "./SendRequest";

const BASE_URL = '/api/tacks';

const getAll = () => {
	return sendRequest(`${BASE_URL}/tack`);
};

const addTack = (tack) => {
	return sendRequest(`${BASE_URL}`, 'POST', {
		name: tack.name,
		brand: tack.brand,
		color: tack.color,
		size: tack.size,
		category: tack.category,
	});
};

const deleteTack = (id) => {
	return sendRequest(`${BASE_URL}/${id}`, 'DELETE', {id});
};

export {
	getAll,
	addTack,
	deleteTack,
};