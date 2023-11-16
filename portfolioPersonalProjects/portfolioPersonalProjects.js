import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator=`${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock=`${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator=`${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`



    projects=[{
        "name":"BMI Calculator App",
        "img":this.BMICalculator,
        "link":"https://achyuthportfolio-dev-ed.develop.my.site.com/bmi-calculator"
    },
    {
        "name":"Alarm Clock App",
        "img":this.AlarmClock,
        "link":"https://achyuthportfolio-dev-ed.develop.my.site.com/alarm-clock"
    },
    {
        "name":"Currency Calculator App",
        "img":this.CurrencyCalculator,
        "link":"https://achyuthportfolio-dev-ed.develop.my.site.com/currency-convertor"
    },
]}




