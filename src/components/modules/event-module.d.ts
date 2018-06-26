import { ModuleStandard, Option } from "../module-standard";
import { RequiredModel } from './model';
export default class EventModule extends ModuleStandard {
    constructor(opt: Option);
    trigger(model: RequiredModel): Function;
}
