import { Calculation, AddAndSubtract, GetUserInput } from "./actionTypes";
import React from "react";

export const increment = (): Calculation => {
  return { type: "INCREMENT" };
};

export const decrement = (): Calculation => {
  return { type: "DECREMENT" };
};

export const add_5 = (): AddAndSubtract => {
  return { type: "ADD_5", value: 5 };
};

export const subtract_5 = (): AddAndSubtract => {
  return { type: "SUBTRACT_5", value: 5 };
};

export const reset = (): AddAndSubtract => {
  return { type: "RESET", value: 0 };
};

export const getUserInput = (
  event: React.ChangeEvent<HTMLInputElement>
): GetUserInput => {
  return { type: "GET_USER_INPUT", value: event };
};

export const multiply = (): Calculation => {
  return { type: "MULTIPLY" };
};
