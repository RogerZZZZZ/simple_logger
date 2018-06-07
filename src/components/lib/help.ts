/**
 * @description some helping functions
 */

export const isArray: Function = (obj: any): boolean => {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

export const isObject: Function = (obj: any): boolean => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};
export const isFunction: Function = (obj: any): obj is Function => {
    return Function.prototype.toString.call(obj) === '[object Function]';
};

export const isPromise: Function = (obj: any): boolean => {
    try {
        return typeof obj.then === 'function';
    } catch (e) {
        return false;
    }
};

export const only: Function = (obj: object, keys: string | string[]): object => {
    obj = obj || {};
    if ('string' === typeof keys) keys = keys.split(/ +/);
    return keys.reduce((ret: object, key: string): object => {
        if (null === obj[key]) return ret;
        ret[key] = obj[key];
        return ret;
    }, {})
}
