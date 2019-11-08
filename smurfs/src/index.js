import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from "redux";
import { reducer, initialState } from "./reducers/reducer";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import './index.css';

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

