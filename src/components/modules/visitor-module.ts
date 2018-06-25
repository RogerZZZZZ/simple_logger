import { ModuleStandard, Option } from '../module-standard'
import { ModelVisitor, RequiredModel } from './model'
import RequestModule from '../common/request-module'
import * as platform from 'platform'
import { only } from '../lib/help'

let requestModule = new RequestModule(false)

const wrapModel: Function = (model: RequiredModel): ModelVisitor => {
  return Object.assign(model, only(platform, 'name version os'))
}

export default class VisitorModule extends ModuleStandard {

  constructor(opt: Option) {
    super(opt)
  }

  public count (model: RequiredModel): Function {
    return function(target: object, key: string, descriptor: any) {
      requestModule.postMethod(this.opt.serverAddress + '/visitor/count', function (data: object) {
        this.__log(data)
      }.bind(this), wrapModel(model))
    }.bind(this)
  }
}
