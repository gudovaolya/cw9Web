import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

import contactsReducer from './store/reducers/contacts';

import axios from 'axios';
axios.defaults.baseURL = 'https://project-olga-cw9.firebaseio.com/';

const rootReducer = combineReducers({
    contacts_reducer: contactsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
