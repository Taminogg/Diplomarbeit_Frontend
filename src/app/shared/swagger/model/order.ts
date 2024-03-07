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
import { Csinquiry } from './csinquiry';
import { MessageConversation } from './messageConversation';
import { Checklist } from './checklist';
import { Tlinquiry } from './tlinquiry';
import { ProductionPlanning } from './productionPlanning';


export interface Order { 
    id?: number;
    canceled?: boolean;
    successfullyFinished?: boolean;
    status?: string | null;
    customerName?: string | null;
    createdBy?: string | null;
    amount?: number;
    lastUpdated?: string;
    checklistId?: number | null;
    csId?: number | null;
    tlId?: number | null;
    ppId?: number | null;
    additionalInformation?: string | null;
    checklist?: Checklist;
    readonly messageConversations?: Array<MessageConversation> | null;
    cs?: Csinquiry;
    tl?: Tlinquiry;
    productionPlanning?: ProductionPlanning;
}

