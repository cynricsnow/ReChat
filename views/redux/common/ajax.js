'use strict'
import qwest from 'qwest';

const ajax = {
    get: async function (url, params = {}, options = {}) {
        options.responseType = options.responseType || 'text';
        let res = {};
        try {
            const xhr = await qwest.get(url, params, options);
            res = JSON.parse(xhr.response);
        } catch (e) {
            throw e;
        }
        if (res.code !== 0) {
            throw res.error;
        }
        return res.data;
    },
    post: async function (url, params = {}, options = {}) {
        options.dataType = options.dataType || 'json';
        options.responseType = options.responseType || 'text';
        let res = {};
        try {
            const xhr = await qwest.post(url, params, options);
            res = JSON.parse(xhr.response);
        } catch (e) {
            throw e;
        }
        if (res.code !== 0) {
            throw res.error;
        }
        return res.data;
    }
}

export default ajax;
