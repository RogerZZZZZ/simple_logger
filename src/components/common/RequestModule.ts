import * as _ from 'lodash'
import axios, { AxiosPromise } from 'axios'

interface commonData {
    label: string,
    value: string
}

export default class RequestModule {
    private _isThrottle: boolean = true

    constructor (isThrottle: boolean) {
        this._isThrottle = isThrottle
    }

    private getMethod (url: string, callBack: Function, ...params: Array<commonData>) {
        let requestUrl: string = url + '?' + params.reduce( (d, s) => {
            return {
                label: 'res',
                value: d.label + '=' + s.value + '&' + s.label + '=' + s.value
            }
        }).value

        axios.get(requestUrl).then(callBack())
    }

    private postMethod (url: string, callBack: Function, params: object) {
        axios.post(url, params).then(callBack())
    }
}