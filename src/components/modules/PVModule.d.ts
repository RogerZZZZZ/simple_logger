import { ModuleStandard, Option } from '../ModuleStandard';
import { RequiredModel } from './model';
export default class PVModule extends ModuleStandard {
    constructor(opt: Option);
    count(model: RequiredModel): (target: object, key: string, descriptor: any) => void;
    hello(target: object, key: string, descriptor: any): any;
    test(): void;
}
