import ModuleStandard from '../ModuleStandard'
import RequestModule from '../common/RequestModule'

let requestModule = new RequestModule(false);

export default class PVModule extends ModuleStandard {

  static count (word: string) {
    return (target: object, key: string, descriptor: any) => {
      requestModule.postMethod(this._opt.serverAddress + '/pv/visitor', (data: object) => {
        console.log(data)
      }, {
        label: 'abc1',
        value: word
      })
    }
  }

  static hello (target: object, key: string, descriptor: any) {
    const method = descriptor.value;
    let moreAtk = 50;
    let ret;
    descriptor.value = (...args: Array<any>) => {
      args[0] += moreAtk;
      ret = method.apply(target, args);
      return ret;
    }
    return descriptor;
  }
}
