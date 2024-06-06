import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry"
import ACCOUNT_OBJECT from "@salesforce/schema/Account"

export default class S14GetPicklistValues extends LightningElement {
    accountRecordTypeID
    industry
    directIndustry
    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    accountRecordType(response){
        if(response.data){
            this.accountRecordTypeID = response.data.defaultRecordTypeId
        }       
    }

    @wire(getPicklistValues,{recordTypeId:"$accountRecordTypeID" , fieldApiName: INDUSTRY_FIELD})
    industryValues(response){
        if(response.data){
            this.directIndustry = response.data.values
            this.industry = response.data.values.map(value => {
                return {...value, label:value.label, label:value.value }
            })
        }      
    }

   get options() {   
        //return this.industry ? this.industry : 'No Values'
        return this.test
    }
}