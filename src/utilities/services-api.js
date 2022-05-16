import { sendRequest } from "./SendRequest";

const BASE_URL = '/api/services';

const getAll = () => {
	return sendRequest(BASE_URL);
};

export {
	getAll
};