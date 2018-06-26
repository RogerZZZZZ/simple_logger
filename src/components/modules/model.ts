/**
 * @description models
 */

export interface RequiredModel {
    tag: string,
    page: string,
    userName?: string
}

export interface ModelVisitor extends BaseInfo {
}

export interface ModuleEvent extends BaseInfo {
    eventName: string,
}

interface BaseInfo {
    platform?: string,
    userName?: string,
    os?: string,
    tag: string,
    version?: string,
    page: string,
}