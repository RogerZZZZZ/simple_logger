import EventModule from './modules/event-module';
import VisitorModule from './modules/visitor-module';
import { Option } from './module-standard';
export default class Logger {
    static instance: (opt: Option) => {
        Visitor: VisitorModule;
        EventLogger: EventModule;
    };
}
