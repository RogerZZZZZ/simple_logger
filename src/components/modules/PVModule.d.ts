import ModuleStandard from '../ModuleStandard';
import { RequiredModel } from './model';
export default class PVModule extends ModuleStandard {
    static count(model: RequiredModel): (target: object, key: string, descriptor: any) => void;
    static hello(target: object, key: string, descriptor: any): any;
}
