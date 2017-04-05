'use strict'
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';
import client from './common/ajax.js';

const ajaxMiddlewareCreator = client => store => next => action => {
    const { types, promise, ...rest} = action;
    if (!promise) {
        return next(action);
    } else {
        const [ REQUEST, SUCCESS, FAILURE ] = types;
        next({
            type: REQUEST,
            ...rest
        });
        const actionPromise = promise(client);
        actionPromise.then(
            result => next({
                type: SUCCESS,
                ...rest,
                result
            }),
            error => next({
                type: FAILURE,
                ...rest,
                error
            })
        ).catch(
            error => {
                console.log('MIDDLEWARE ERROR:', error);
                next({
                    type: FAILURE,
                    ...rest,
                    error
                });
            }
        )
        return actionPromise;
    }
}

const store = createStore(
    reducer,
    applyMiddleware(ajaxMiddlewareCreator(client))
);

export default store;
