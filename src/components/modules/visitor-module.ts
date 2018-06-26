import { ModuleStandard, Option } from '../module-standard'
import { ModelVisitor, RequiredModel } from './model'
import RequestModule from '../common/request-module'
import * as platform from 'platform'
import { only } from '../lib/help'

let requestModule = new RequestModule(false)

const wrapModel: Function = (model: RequiredModel): ModelVisitor => {
  return Object.assign(model, only(platform, 'name version os.family os.architecture'))
}

export default class VisitorModule extends ModuleStandard {
  private _timers: Map<string, number>

  constructor(opt: Option) {
    super(opt)

    this._timers = new Map()
  }

  public count(model: RequiredModel): Function {
    return function(target: object, key: string, descriptor: any) {
      requestModule.postMethod(this.opt.serverAddress + '/visitor/count', function(data: object) {
        this.__log(data)
      }.bind(this), wrapModel(model))
    }.bind(this)
  }

  public pageEnter(page: string): void {
    if (!page) page = `timer_${this._timers.size}`

    this._timers.set(page, Date.now())
    this.__log(`Enter Page: ${page}`)
  }

  public pageLeave(page: string): void {
    if (!page && this._timers.size) {
      const is: Function = (x: string) => x.includes('timer_')
      page = [...this._timers.keys()].reduceRight((x: string, y: string) => {
        return is(x) ? x: (is(y)? y: null);
      })
    }
    if (this._timers.has(page)) {
      const span = this.timeSpan(this._timers.get(page))
      this._timers.delete(page)
      requestModule.postMethod(this.opt.serverAddress + '/visitor/pageStay', function(data: object) {
        this.__log(data)
      }.bind(this), wrapModel({timeSpan: span}))
    }
  }

  public pageStay(page: string): void {
    this.pageEnter(page)

    window.onbeforeunload = function(): void {
      this.pageLeave(page)
    }.bind(this)
  }

  private now(): number {
    return Date.now()
  }

  private timeSpan(then: number): number {
    return (this.now() - then)
  }
}
