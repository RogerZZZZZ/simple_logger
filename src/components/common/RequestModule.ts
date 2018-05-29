import * as _ from 'lodash'
import axios from 'axios'

export interface CommonData {
    label?: string,
    value?: string
}

export default class RequestModule {
    // TODO: implement this config feature
    private _isThrottle: boolean = true

    constructor (isThrottle: boolean) {
        this._isThrottle = isThrottle
    }

    public getMethod (url: string, callBack: Function, ...params: Array<CommonData>) {
        let requestUrl = ''
        if (params.length > 1) {
            requestUrl = url + '?' + params.reduce( (d, s) => {
                return {
                    label: 'res',
                    value: d.label + '=' + d.value + '&' + s.label + '=' + s.value
                }
            }).value
        } else if (params.length === 1){
            requestUrl = url + '?' + params[0].label + '=' + params[0].value
        } else {
            requestUrl = url
        }

        console.log(requestUrl)

        axios.get(requestUrl).then(callBack())
    }

    public postMethod (url: string, callBack: Function, params: object) {
        axios.post(url, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": "*",
                'withCredentials': true
            }
        }).then(callBack())
    }
}
