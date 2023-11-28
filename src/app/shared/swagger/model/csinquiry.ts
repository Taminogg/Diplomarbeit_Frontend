/**
 * Backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Order } from './order';


export interface Csinquiry { 
    id?: number;
    container?: string | null;
    fastLine?: string | null;
    directLine?: string | null;
    articleNumber?: string | null;
    palletamount?: number;
    customer?: string | null;
    abnumber?: number;
    bruttoWeightInKg?: number;
    incoterm?: string | null;
    containersizeA?: number;
    containersizeB?: number;
    containersizeHc?: number;
    freeDetention?: boolean;
    thctb?: boolean;
    readyToLoad?: string;
    loadingPlattform?: string | null;
    readonly orders?: Array<Order> | null;
}

