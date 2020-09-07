import { rootReducer } from "./Redux/Reducer";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("test reducer", () => {
  let initialState;
  beforeEach(() => {
    store.clearActions();
    initialState = {
      count: 0,
      userInput: 0,
    };
  });

  it(" should return initial state", () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it("returns correct count state from increment", () => {
    const action = { type: "INCREMENT" };
    const expectedState = { count: 1, userInput: 0 };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("returns correct count state from decrement", () => {
    const action = { type: "DECREMENT" };
    const expectedState = { count: -1, userInput: 0 };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("returns correct count state from add 5", () => {
    const action = { type: "ADD_5", value: 5 };
    const expectedState = {
      count: 5,
      userInput: 0,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("returns correct count state from subtract 5", () => {
    const action = { type: "SUBTRACT_5", value: 5 };
    const expectedState = {
      count: -5,
      userInput: 0,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("returns correct count state from reset", () => {
    const action = { type: "RESET", value: 0 };
    const expectedState = { count: 0, userInput: 0 };
    initialState = { count: 5, userInput: 0 };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("returns correct user input state from getUserInput", () => {
    const event = { target: { value: "1" } };
    const action = { type: "GET_USER_INPUT", value: event };
    const expectedState = { userInput: 1, count: 0 };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("returns correct count state from multiply", () => {
    const action = { type: "MULTIPLY" };
    initialState = { count: 3, userInput: 2 };
    const expectedState = {
      count: 6,
      userInput: 2,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });
});
