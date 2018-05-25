import ModuleStandard from './ModuleStandard';
export declare module Logger {
    class PV implements ModuleStandard {
        __SERVER_ADDRESS: string;
        static hello(target: object, key: string, descriptor: any): any;
        static satSomething(word: string): (target: object, key: string, descriptor: any) => void;
        init(): void;
    }
}
