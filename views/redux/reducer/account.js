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

const clientCache = (user) => {
    if (localStorage.length >= 3) {
        const key = localStorage.key(0);
        localStorage.removeItem(key);
    }
    localStorage[user.username] = user.avatarUrl;
}

export default function reducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            clientCache(action.result);
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.result
                },
                message: null
            }
        case types.MESSAGE_EXPIRED:
            return {
                ...state,
                message: null
            }
        case types.REGISTER_SUCCESS:
            clientCache(action.result);
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
