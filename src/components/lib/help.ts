/**
 * @description some helping functions
 */

const grabAttribute: Function = (chain: string, target: object): any => {
    return chain.split('.').reduce((d, i) => {
        return typeof d == 'undefined' ? d : d[i]
    }, target)
}

export const isArray: Function = (obj: any): boolean => {
    return Object.prototype.toString.call(obj) === '[object Array]'
};

export const isObject: Function = (obj: any): boolean => {
    return Object.prototype.toString.call(obj) === '[object Object]'
};
export const isFunction: Function = (obj: any): obj is Function => {
    return Function.prototype.toString.call(obj) === '[object Function]'
};

export const isPromise: Function = (obj: any): boolean => {
    try {
        return typeof obj.then === 'function'
    } catch (e) {
        return false
    }
};

export const only: Function = (obj: object, keys: string | string[]): object => {
    obj = obj || {};
    if ('string' === typeof keys) keys = keys.split(/ +/);
    return keys.reduce((ret: object, key: string): object => {
        if (null === obj[key]) return ret
        if (key.indexOf('.') !== -1) {
            let t = key.slice(key.lastIndexOf('.') + 1)
            ret[t] = grabAttribute(key, obj)
        } else {
            ret[key] = obj[key]
        }
        return ret
    }, {})
}
