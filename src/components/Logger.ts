import EventModule from './modules/event-module'
import VisitorModule from './modules/visitor-module'
import { Option } from './module-standard'

export default class Logger {

  public static instance = (opt: Option) => {
    return {
      Visitor: new VisitorModule(opt),
      EventLogger: new EventModule(opt),
    }
  }
}
