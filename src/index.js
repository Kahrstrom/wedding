import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
import routes from './routes';
import reducers from './reducers/index';

const createStoreWithMiddleWare = applyMiddleware(
    ReduxPromise
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('app')
);
