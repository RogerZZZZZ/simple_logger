import { ModuleStandard, Option } from '../module-standard'
import RequestModule from '../common/request-module'
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

  public count (model: RequiredModel): Function {
    return function(target: object, key: string, descriptor: any) {
      requestModule.postMethod(this.opt.serverAddress + '/pv/visitor', function (data: object) {
        this.__log(data)
      }.bind(this), wrapPvModel(model))
    }.bind(this)
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
    this.opt
  }
  
}
