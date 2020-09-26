import React from "react";
import "./CSS/App.css";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  increment,
  decrement,
  add_5,
  subtract_5,
  reset,
  multiply,
  getUserInput,
} from "./Redux/ActionCreator";
import { ReduxStore } from "./Redux/Reducer";
import styled from "styled-components";

const DisplayWrapper = styled.div`
  color: white;
  margin: 5rem 0 0;
  font-size: 2rem;
`;

const Button = styled.button`
  margin: 1rem;
  color: #ffac41;
  background: #ff1e56;
  font-size: 1.3rem;
  text-decoration: none;
  border: none;
  padding: 5px;
  transition: 0.5s;
  border-radius: 5px;
  &:hover {
    transform: scale(1.2);
  }
`;

type AppProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
  add_5: () => void;
  subtract_5: () => void;
  reset: () => void;
  multiply: () => void;
  getUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function App(props: AppProps) {
  return (
    <div>
      <h1>hello</h1>
      <DisplayWrapper>{props.count}</DisplayWrapper>
      <br />

      <Button onClick={props.increment}>INCREMENT</Button>
      <Button onClick={props.decrement}>DECREMENT</Button>
      <Button onClick={props.add_5}>Add 5</Button>

      <Button onClick={props.subtract_5}>Subtract 5</Button>
      <Button onClick={props.reset}>Reset</Button>
      <div>
        <Button onClick={props.multiply}>Multiply by</Button>
        <input
          type='number'
          onChange={event => props.getUserInput(event)}
          style={{ fontSize: "1.5rem" }}
        ></input>
      </div>
    </div>
  );
}

const mapStateToProps = (state: ReduxStore) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    add_5: () => dispatch(add_5()),
    subtract_5: () => dispatch(subtract_5()),
    reset: () => dispatch(reset()),
    getUserInput: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(getUserInput(event)),
    multiply: () => dispatch(multiply()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
