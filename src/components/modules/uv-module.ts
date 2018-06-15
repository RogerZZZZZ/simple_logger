import { ModuleStandard, Option } from "../module-standard";
import RequestModule from '../common/request-module'
import { ModelUv, RequiredModel } from './model'
import * as platform from 'platform'
import { only } from '../lib/help'

const requestModel = new RequestModule(false)

const wrapUvModel: Function = (model: RequiredModel): ModelUv => {
  return Object.assign(model, only(platform, 'name version os'))
}

export default class UVModule extends ModuleStandard {
  
  constructor (opt: Option) {
    super(opt)
  }

  public count (model: RequiredModel): Function {
    return function(target: object, key: string, description: any) {
      const wrapModel = wrapUvModel(model)
      this.__log(wrapModel)
    }.bind(this)
  }
}