import PVModule from './modules/pv-module'
import UVModule from './modules/uv-module'
import EventModule from './modules/event-module'
import { Option } from './module-standard'

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
