export interface Option {
    serverAddress?: string;
    debug?: boolean;
}
export declare class ModuleStandard {
    private _opt;
    constructor(opt: Option);
    __log(log: string): void;
    __err(log: string): void;
    readonly opt: Option;
}
