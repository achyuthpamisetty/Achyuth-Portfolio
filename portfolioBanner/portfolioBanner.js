import { LightningElement,wire,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getRecord,getFieldValue} from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'

export default class PortfolioBanner extends LightningElement {

    @api recordId // = 'a005h00000wJl9zAAC'

    @api linkedinUrl //= 'https://www.linkedin.com/in/achyuth-k-172b43182/'
    @api githubUrl //= 'https://github.com/achyuthpamisetty'
    @api trailheadUrl //= 'https://www.salesforce.com/trailblazer/apamisetty1'
    @api youtubeUrl
    @api twitterUrl
    @api blogUrl

    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpg`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`

    
    @wire(getRecord,{recordId:'$recordId', fields:[FULLNAME,COMPANY_LOCATION,COMPANY_NAME,DESIGNATION]})
    portfolioData
    // portfolioHandler({data, error}){
    //     if(data){
    //         console.log("record data",JSON.stringify(data))
    //     }
    //     if(error){
    //         console.error("error", error)
    //     }
    // }

    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION)
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    }
    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }


}