export default class ModuleStandard {
  static _opt = {
    serverAddress: 'http://localhost:3000'
  }

  static init(_opt: object) {
    Object.assign(this._opt, _opt)
  }
}
