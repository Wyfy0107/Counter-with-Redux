import configureStore from "redux-mock-store";
import * as actions from "./Redux/ActionCreator";

const mockStore = configureStore();
const store = mockStore();

describe("test action creators", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("should dispatch action", () => {
    store.dispatch(actions.increment());
    const expectedPayload = { type: "INCREMENT" };

    expect(store.getActions()[0]).toEqual(expectedPayload);
  });

  it("should dispatch action increment", () => {
    store.dispatch(actions.increment());
    const expectedPayload = { type: "INCREMENT" };

    expect(store.getActions()[0]).toEqual(expectedPayload);
  });

  it("should dispatch action decrement", () => {
    store.dispatch(actions.decrement());
    const expectedPayload = { type: "DECREMENT" };

    expect(store.getActions()[0]).toEqual(expectedPayload);
  });

  it("should dispatch action add 5", () => {
    store.dispatch(actions.add_5());
    const expectedPayload = { type: "ADD_5", value: 5 };

    expect(store.getActions()[0]).toEqual(expectedPayload);
  });

  it("should dispatch action subtract 5", () => {
    store.dispatch(actions.subtract_5());
    const expectedPayload = { type: "SUBTRACT_5", value: 5 };

    expect(store.getActions()[0]).toEqual(expectedPayload);
  });

  it("should dispatch action reset", () => {
    store.dispatch(actions.reset());
    const expectedPayload = { type: "RESET", value: 0 };

    expect(store.getActions()[0]).toEqual(expectedPayload);
  });

  it("should dispatch action multiply", () => {
    store.dispatch(actions.multiply());
    const expectedPayload = { type: "MULTIPLY" };

    expect(store.getActions()[0]).toEqual(expectedPayload);
  });
});
