import ModuleStandard from '../ModuleStandard'
import RequestModule from '../common/RequestModule'
import { ModelPv, RequiredModel } from './model'
import * as platform from 'platform'
import { only } from '../lib/help'

let requestModule = new RequestModule(false);

const wrapPvModel: Function = (model: RequiredModel): ModelPv => {
  return Object.assign(model, only(platform, 'name version os'))
}

export default class PVModule extends ModuleStandard {

  static count (model: RequiredModel) {
    return (target: object, key: string, descriptor: any) => {
      requestModule.postMethod(this._opt.serverAddress + '/pv/visitor', (data: object) => {
        console.log(data)
      }, wrapPvModel(model))
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
