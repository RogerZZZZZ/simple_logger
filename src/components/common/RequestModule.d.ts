export interface CommonData {
    label?: string;
    value?: string;
}
export default class RequestModule {
    private _isThrottle;
    constructor(isThrottle: boolean);
    getMethod(url: string, callBack: Function, ...params: Array<CommonData>): void;
    postMethod(url: string, callBack: Function, params: object): void;
}
