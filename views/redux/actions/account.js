'use strict'
export const LOGIN = 'ReChat/account/LOGIN';
export const LOGIN_SUCCESS = 'ReChat/account/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'ReChat/account/LOGIN_FAILURE';

export const REGISTER = 'ReChat/account/REGISTER';
export const REGISTER_SUCCESS = 'ReChat/account/REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'ReChat/account/REGISTER_FAILURE';

export const VALIDATE = 'ReChat/account/VALIDATE';
export const VALIDATE_SUCCESS = 'ReChat/account/VALIDATE_SUCCESS';
export const VALIDATE_FAILURE = 'ReChat/account/VALIDATE_FAILURE';


export const login = data => ({
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE],
    promise: client => client.post('/api/account/login', data)
})

export const register = data => ({
    types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE],
    promise: client => client.post('/api/account/register', data)
})

export const validate = () => ({
    types: [VALIDATE, VALIDATE_SUCCESS, VALIDATE_FAILURE],
    promise: client => client.get('/api/account/validate')
})
