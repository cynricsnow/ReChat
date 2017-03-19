'use strict'
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import moment from 'moment';
moment.locale('zh-CN');

import App from './components/App';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import store from './redux/store';

const history = createBrowserHistory()

const router = (
    <Provider store={store}>
        <Router history={history}>
            <div>
            <Route path='/' component={App} />
            <Route strict path='/' component={IndexPage} />

            </div>
        </Router>
    </Provider>
);

const reactRoot = document.getElementById('react-root');
ReactDOM.render(router, reactRoot);
