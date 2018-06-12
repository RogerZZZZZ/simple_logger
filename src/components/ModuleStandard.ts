import RequestModule from './common/RequestModule';

export interface Option {
  serverAddress: string,
  debug: boolean
}

export class ModuleStandard {
  private _opt: Option = {
    serverAddress: 'http://localhost:3000',
    debug: false,
  }

  constructor (opt: Option) {
    Object.assign(this._opt, opt)
  }

  __log (log: string) {
    if (this._opt.debug) console.log(log)
  }

  __err (log: string) {
    if (this._opt.debug) console.error(log)
  }

  public getOpt() : Option {
    return this._opt
  }
}
