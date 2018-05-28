import ModuleStandard from './ModuleStandard';
export declare module Logger {
    class PV extends ModuleStandard {
        static count(word: string): (target: object, key: string, descriptor: any) => void;
        static hello(target: object, key: string, descriptor: any): any;
        static saySomething(word: string): void;
    }
}
