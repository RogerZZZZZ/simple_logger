import RequestModule from './common/request-module';

export interface Option {
  serverAddress?: string,
  page: string,
  debug?: boolean
}

export class ModuleStandard {
  private _opt: Option = {
    serverAddress: 'http://localhost:3000',
    page: 'ignored',
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

  public get opt (): Option {
    return this._opt
  }
}
