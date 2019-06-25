import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import Thunk from 'redux-thunk';

const conposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
     conposeEnhancers(applyMiddleware(Thunk)));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.querySelector('#root')
);
