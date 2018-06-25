/**
 * @description models
 */

export interface RequiredModel {
    tag: string,
    userName?: string
}

export interface ModelVisitor {
    tag: string,
    platForm?: string,
    userName?: string,
    os?: string,
    version?: string,
}