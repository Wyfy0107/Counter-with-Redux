export const INCREMENT = () => {
	return { type: 'INCREMENT' };
};

export const DECREMENT = () => {
	return { type: 'DECREMENT' };
};

export const ADD_5 = () => {
	return { type: 'ADD_5', value: 5 };
};

export const SUBTRACT_5 = () => {
	return { type: 'SUBTRACT_5', value: 5 };
};

export const RESET = () => {
	return { type: 'RESET', value: 0 };
};

export const getUserInput = (event) => {
	return { type: 'GET_USER_INPUT', value: event.target.value };
};

export const MULTIPLY = () => {
	return { type: 'MULTIPLY' };
};
