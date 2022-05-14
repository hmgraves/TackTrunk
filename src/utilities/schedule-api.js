import { sendRequest } from "./SendRequest";

const BASE_URL = '/api/schedule';

const getAll = () => {
	return sendRequest(`${BASE_URL}/my-schedule`);
};

const addAppointment = (date, time, service) => {
	return sendRequest(BASE_URL, 'POST', {date, time, service});
};

const deleteAppointment = (id) => {
	console.log(id)
	return sendRequest(`${BASE_URL}/${id}`, 'DELETE', {id});
};

export {
	getAll,
	addAppointment,
	deleteAppointment,
};