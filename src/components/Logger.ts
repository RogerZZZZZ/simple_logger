import PVModule from './modules/PVModule'
import UVModule from './modules/UVModule'
import EventModule from './modules/EventModule'

export namespace Logger {
  let configObject = {}

  export const config = (opt: object) => {
    configObject = opt
  }

  PVModule.init(config)
  export const PV = PVModule

  UVModule.init(config)
  export const UV = UVModule

  EventModule.init(config)
  export const EventLogger = EventModule
}
