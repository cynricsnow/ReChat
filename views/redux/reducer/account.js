'use strict'
import * as types from '../actions/account';

const INITIAL_STATE = {
    user: null,
    message: null,
}

const messages = {
    INVALID_INPUT: '无效输入',
    INVALID_USER: '当前用户名/邮箱未注册',
    INVALID_PASSWORD: '密码错误',
    USER_DISABLED: '当前账户已登陆'
}

export default function reducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.result
                },
                message: null
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.result
                },
                message: null
            }
        case types.VALIDATE_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.result
                },
                message: null
            }
        case types.LOGIN_FAILURE:
        case types.REGISTER_FAILURE:
            return {
                ...state,
                message: (action.error.type && messages[action.error.type]) || '未知错误'
            }
        default:
            return state;
    }
}
