import PVModule from './modules/PVModule';
import UVModule from './modules/UVModule';
import EventModule from './modules/EventModule';
export declare namespace Logger {
    const config: (opt: object) => void;
    const PV: typeof PVModule;
    const UV: typeof UVModule;
    const EventLogger: typeof EventModule;
}
