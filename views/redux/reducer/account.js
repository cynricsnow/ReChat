'use strict'
import * as types from '../actions/account';

const INITIAL_STATE = {
    user: null
}

export default function reducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.result
                }
            }
        case types.VALIDATE_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.result
                }
            }
        default:
            return state;
    }
}
