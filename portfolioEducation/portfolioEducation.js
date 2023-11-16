import { LightningElement,wire,api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const COLUMNS = [
    { label: 'Education', fieldName: 'Education' },
    { label: 'Institution', fieldName: 'InstitutionName' },
    { label: 'Passing Year', fieldName: 'PassingYear' },
];
export default class PortfolioEducation extends LightningElement {


    tableData =[]
    @api recordId
    columns = COLUMNS

    @wire(getRelatedListRecords,{
        parentRecordId:"$recordId",
        relatedListId:'Educations__r',
        fields:['Education__c.InstitutionName__c','Education__c.PassingYear__c','Education__c.Title__c'],
        sortBy:['Education__c.PassingYear__c']

    })EducationHandler({data,error}){
    if(data){
        console.log("EducationHandler Data", JSON.stringify(data))
        this.formatData(data)
    }
    if(error){
        console.error("EducationHandler Error", error)
    }
}
formatData(data){
    this.tableData = [...data.records].reverse().map(item=>{
        let Id = item.id
        const{InstitutionName__c,PassingYear__c,Title__c} = item.fields
        let Education = Title__c.value
        let PassingYear = PassingYear__c.value
        let InstitutionName = InstitutionName__c.value
        return{
            Id,Education,PassingYear,InstitutionName
        }
    })
    console.log("this.tableData",JSON.stringify(this.tableData))

}
}