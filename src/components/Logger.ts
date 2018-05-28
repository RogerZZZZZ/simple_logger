import PVModule from './modules/PVModule'
import UVModule from './modules/UVModule'
import EventModule from './modules/EventModule'

export namespace Logger {

  export const PV = PVModule

  export const UV = UVModule

  export const EventLogger = EventModule
}
