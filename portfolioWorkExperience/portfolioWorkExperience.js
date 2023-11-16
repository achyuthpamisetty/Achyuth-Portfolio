import { LightningElement,wire,api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {
    @api recordId
    workExperienceList = []

    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId: 'WorkExperience__r',
        fields:[
            'WorkExperience__c.JobStartDate__c',
            'WorkExperience__c.JobEndDate__c',
            'WorkExperience__c.IsCurrent__c',
            'WorkExperience__c.Description__c',
            'WorkExperience__c.Role__c',
            'WorkExperience__c.CompanyName__c',
            'WorkExperience__c.WorkLocation__c'
        ]

    })WorkExperienceHandler({data,error}){
        if(data){
            console.log("WorkExperience Data", JSON.stringify(data))
            this.formatExperience(data)
        }
        if(error){
            console.error(eror)
        }
    }

    formatExperience(data){
        this.workExperienceList = [...data.records].reverse().map(item=>{
            let id = item.id
            const {JobStartDate__c,JobEndDate__c,IsCurrent__c,Description__c,Role__c,CompanyName__c,WorkLocation__c} = item.fields
            let JobStartDate= this.getValue(JobStartDate__c)
            let JobEndDate= this.getValue(JobEndDate__c)
            let IsCurrent= this.getValue(IsCurrent__c)
            let Description= this.getValue(Description__c)
            let Role= this.getValue(Role__c)
            let CompanyName= this.getValue(CompanyName__c)
            let WorkLocation= this.getValue(WorkLocation__c)

            return {id,JobStartDate,JobEndDate,IsCurrent,Description,Role,CompanyName,WorkLocation}
        })
        console.log("workExperienceList",JSON.stringify(this.workExperienceList))
    }

    getValue(data){
        return data && (data.displayValue || data.value)
    }
}