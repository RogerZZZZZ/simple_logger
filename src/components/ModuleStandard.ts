import RequestModule from './common/RequestModule';

export default class ModuleStandard {
  static _opt = {
    serverAddress: 'http://localhost:3000',
    debug: false,
  }

  static init(_opt: object) {
    Object.assign(this._opt, _opt)
  }

  static __log (log: string) {
    if (this._opt.debug) console.log(log)
  }

  static __err (log: string) {
    if (this._opt.debug) console.error(log)
  }
}
