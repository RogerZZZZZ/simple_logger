import { ModuleStandard, Option } from "../module-standard"
import { ModuleEvent, RequiredModel } from './model'
import RequestModule from '../common/request-module'
import * as platform from 'platform'
import { only } from '../lib/help'

let requestModule = new RequestModule(false)

export default class EventModule extends ModuleStandard {
  
  constructor(opt: Option) {
    super(opt)
  }

  public trigger (model: RequiredModel): Function {
    return function(target: object, key: string, descriptor: any) {
      requestModule.postMethod(this.opt.serverAddress + '/event/trigger', function (data: object) {
        this.__log(data)
      }.bind(this), this.wrapModel(model))
    }.bind(this)
  }

  private wrapModel (model: RequiredModel): ModuleEvent {
    Object.assign(model, {page: this.opt.page})
    return Object.assign(model, only(platform, 'name version os'))
  }
}