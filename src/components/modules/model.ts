/**
 * @description models
 */

export interface RequiredModel {
    tag: string,
    userName?: string
}

export interface ModelVisitor extends BaseInfo {
    tag: string,
}

export interface ModuleEvent extends BaseInfo {
    eventName: string,
    tag: string,
}

interface BaseInfo {
    platform?: string,
    userName?: string,
    os?: string,
    version?: string,
    page: string,
}