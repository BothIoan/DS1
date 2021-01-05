/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Caregiver } from './caregiver';
import { MedInfo } from './medInfo';


export interface Patient { 
    idPatient?: number;
    name?: string;
    date?: string;
    gender?: Patient.GenderEnum;
    address?: string;
    medInfos?: Array<MedInfo>;
    caregiver?: Caregiver;
    password?: string;
    record?: string;
}
export namespace Patient {
    export type GenderEnum = 'Male' | 'Female';
    export const GenderEnum = {
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum
    };
}


