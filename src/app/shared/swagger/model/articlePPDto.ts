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


export interface ArticlePPDto { 
    id: number;
    articleNumber: number;
    isDirectLine: boolean;
    isFastLine: boolean;
    pallets: number;
    csinquiryId: number;
    minHeigthRequired: number;
    desiredDeliveryDate: string;
    inquiryForFixedOrder: boolean;
    inquiryForQuotation: boolean;
    deliveryDate: string;
    shortText: string;
    factory: string;
    nozzle: string;
    productionOrder: string;
    plannedOrder: string;
    plant: string;
}

