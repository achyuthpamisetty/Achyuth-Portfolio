import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioOtherDetails extends LightningElement {

    @api recordId
    superbadges=[]
    badgeIcon = `${PortfolioAssets}/PortfolioAssets/badge.png`

    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SUPERBADGE_FIELD]
    })otherFieldsHandler({data,error}){
        if(data){
            console.log("otherFieldsHandler data", JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error("otherFieldsHandler data", error)
        }
    }
    formatData(data){
        const {Superbadges__c} = data.fields
        this.superbadges = Superbadges__c && Superbadges__c.value ? Superbadges__c.value.split(';'):[]
    }

}