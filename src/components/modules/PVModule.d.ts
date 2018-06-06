import ModuleStandard from '../ModuleStandard';
import { RequiredModel } from './model';
export default class PVModule extends ModuleStandard {
    static count(_opt: RequiredModel): (target: object, key: string, descriptor: any) => void;
    static hello(target: object, key: string, descriptor: any): any;
    static test(target: object, key: string, descriptor: any): any;
}
