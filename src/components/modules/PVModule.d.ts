import ModuleStandard from '../ModuleStandard';
export default class PVModule extends ModuleStandard {
    static count(word: string): (target: object, key: string, descriptor: any) => void;
    static hello(target: object, key: string, descriptor: any): any;
}
