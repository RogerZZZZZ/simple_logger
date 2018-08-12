/**
 * @description models
 */

export interface RequiredModel {
    tag: string,
    userName?: string
}

export interface ModelVisitor extends BaseInfo {
}

export interface ModuleEvent extends BaseInfo {
    eventName: string,
    duration: number,
}

interface BaseInfo {
    platform?: string,
    userName?: string,
    os?: string,
    tag: string,
    version?: string,
    page: string,
}