import PVModule from './modules/PVModule';
import UVModule from './modules/UVModule';
import EventModule from './modules/EventModule';
export declare namespace Logger {
    const config: (opt: object) => void;
    const PV: PVModule;
    const UV: UVModule;
    const EventLogger: EventModule;
}
