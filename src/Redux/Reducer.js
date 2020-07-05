const initialState = {
	count: 0,
	userInput: null,
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, count: state.count + 1 };
		case 'DECREMENT':
			return { ...state, count: state.count - 1 };
		case 'ADD_5':
			return { ...state, count: state.count + action.value };
		case 'SUBTRACT_5':
			return { ...state, count: state.count - action.value };
		case 'RESET':
			return { ...state, count: action.value };
		case 'GET_USER_INPUT':
			return { ...state, userInput: action.value };
		case 'MULTIPLY':
			return {
				...state,
				count: state.count * state.userInput,
			};
		default:
			return state;
	}
};
