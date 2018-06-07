/**
 * @description models
 */

export interface ModelPv {
    tag: string,
    platForm?: string,
    userName?: string,
    os?: string,
    version?: string,
}

export interface RequiredModel {
    tag: string,
    userName?: string
}