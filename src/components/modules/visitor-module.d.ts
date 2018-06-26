import { ModuleStandard, Option } from '../module-standard';
import { RequiredModel } from './model';
export default class VisitorModule extends ModuleStandard {
    private _timers;
    constructor(opt: Option);
    count(model: RequiredModel): Function;
    pageEnter(page: string): void;
    pageLeave(page: string): void;
    pageStay(page: string): void;
    private now();
    private timeSpan(then);
}
