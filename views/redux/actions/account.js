'use strict'
export const LOGIN = 'ReChat/account/LOGIN';
export const LOGIN_SUCCESS = 'ReChat/account/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'ReChat/account/LOGIN_FAIL';

export const REGISTER = 'ReChat/account/REGISTER';
export const REGISTER_SUCCESS = 'ReChat/account/REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'ReChat/account/REGISTER_FAIL';

export const register = data => ({
    types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE],
    promise: client => client.post('/api/account/register', data)
})
