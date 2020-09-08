import { DispatchActions } from "./actionTypes";

export type ReduxStore = {
  count: number;
  userInput: number;
};

const initialState: ReduxStore = {
  count: 0,
  userInput: 0,
};

export const rootReducer = (
  state = initialState,
  action: DispatchActions
): ReduxStore => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ADD_5":
      return { ...state, count: state.count + (action.value as number) };
    case "SUBTRACT_5":
      return { ...state, count: state.count - (action.value as number) };
    case "RESET":
      return { ...state, count: action.value as number };
    case "GET_USER_INPUT":
      const event = action.value as React.ChangeEvent<HTMLInputElement>;
      const value = parseInt(event.target.value);
      return { ...state, userInput: value };
    case "MULTIPLY":
      return {
        ...state,
        count: state.count + state.userInput,
      };
    default:
      return state;
  }
};
