import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myStore from './Redux/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={myStore}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
