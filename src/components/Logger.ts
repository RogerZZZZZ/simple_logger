import PVModule from './modules/PVModule'
import UVModule from './modules/UVModule'
import EventModule from './modules/EventModule'
import { Option } from './ModuleStandard'

export namespace Logger {
  let configObject: Option

  export const config = (opt: object) => {
    Object.assign(configObject, opt)
  }

  // PVModule.init(config)
  export const PV = new PVModule(configObject)

  // UVModule.init(config)
  export const UV = new UVModule(configObject)

  // EventModule.init(config)
  export const EventLogger = new EventModule(configObject)
}
