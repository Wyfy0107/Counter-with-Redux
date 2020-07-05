import React from 'react';
import './CSS/App.css';
import { connect } from 'react-redux';
import {
	INCREMENT,
	DECREMENT,
	ADD_5,
	SUBTRACT_5,
	RESET,
	MULTIPLY,
	getUserInput,
} from './Redux/ActionCreator';
import styled from 'styled-components';

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

function App(props) {
	return (
		<div>
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
					onChange={(event) => props.getUserInput(event)}
					style={{ fontSize: '1.5rem' }}></input>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		count: state.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(INCREMENT()),
		decrement: () => dispatch(DECREMENT()),
		add_5: () => dispatch(ADD_5()),
		subtract_5: () => dispatch(SUBTRACT_5()),
		reset: () => dispatch(RESET()),
		getUserInput: (event) => dispatch(getUserInput(event)),
		multiply: () => dispatch(MULTIPLY()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
