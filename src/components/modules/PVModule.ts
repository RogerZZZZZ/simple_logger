import { ModuleStandard, Option } from '../ModuleStandard'
import RequestModule from '../common/RequestModule'
import { ModelPv, RequiredModel } from './model'
import * as platform from 'platform'
import { only } from '../lib/help'

let requestModule = new RequestModule(false);

const wrapPvModel: Function = (model: RequiredModel): ModelPv => {
  return Object.assign(model, only(platform, 'name version os'))
}

export default class PVModule extends ModuleStandard {

  constructor(opt: Option) {
    super(opt)
  }

  public count (model: RequiredModel) {
    return (target: object, key: string, descriptor: any) => {
      requestModule.postMethod(this.getOpt().serverAddress + '/pv/visitor', function (data: object) {
        this.__log(data)
      }.bind(this), wrapPvModel(model))
    }
  }

  public hello (target: object, key: string, descriptor: any) {
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

  public test(): void {
    this.getOpt()
  }
  
}
