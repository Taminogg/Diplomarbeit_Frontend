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
import { StepChecklist } from './stepChecklist';


export interface Step { 
    id?: number;
    stepNumber?: number;
    stepDescription?: string | null;
    stepName?: string | null;
    readonly stepChecklists?: Array<StepChecklist> | null;
}

