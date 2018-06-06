import * as _ from 'lodash'
import axios from 'axios'

export interface CommonData {
    label: string,
    value?: string
}

export default class RequestModule {
    // TODO: implement this config feature
    private _isThrottle: boolean = true

    constructor (isThrottle: boolean) {
        this._isThrottle = isThrottle
    }

    public getMethod (url: string, callBack: Function, param: object): void {
        let requestUrl = ''
        const keys = Object.keys(param)
        if (keys.length > 1) {
            requestUrl = url + '?' + keys.reduce((t:string, s:string): string => {
                return t + '=' + param[t] + '&' + s + '=' + param[s]
            })
        } else if(keys.length <= 0) {
            requestUrl = url
        } else {
            requestUrl = url + '?' + keys[0] + '=' + param[keys[0]]
        }
        console.log(requestUrl)

        axios.get(requestUrl).then((response) => callBack(response))
    }

    public postMethod (url: string, callBack: Function, params: object): void {
        axios.post(url, params).then((response) => callBack(response))
    }
}
