import ModuleStandard from '../ModuleStandard'
import RequestModule from '../common/RequestModule'
import { ModelPv, RequiredModel } from './model'

let requestModule = new RequestModule(false);

const wrapPvModel: Function = (model: ModelPv): RequiredModel => {
  // console.log(platform.name)
  // model['platform'] = platform.name
  return model
}

export default class PVModule extends ModuleStandard {

  static count (_opt: RequiredModel) {
    return (target: object, key: string, descriptor: any) => {
      requestModule.postMethod(this._opt.serverAddress + '/pv/visitor', (data: object) => {
        console.log(data)
      }, wrapPvModel(_opt))
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

  static test (target: object, key: string, descriptor: any) {
    const method = descriptor.value;
    let ret;
    descriptor.value = (...args: Array<any>) => {
      ret = method.apply(target, args);
      return ret;
    }
    return descriptor;
  }
}
