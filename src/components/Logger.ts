import EventModule from './modules/event-module'
import VisitorModule from './modules/visitor-module'
import { Option } from './module-standard'

export namespace Logger {
  let configObject: Option

  export const config = (opt: object) => {
    Object.assign(configObject, opt)
  }

  export const Visitor = new VisitorModule(configObject)

  export const EventLogger = new EventModule(configObject)
}
