import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountListInfo.getAccountList';

export default class apexWireFunction extends LightningElement {

    accounts;
@wire(getAccountList)
AccListHandler({data,error}){
    if(data){
       this.accounts= data.map(item =>{
           let newType=  item.Type == 'Customer - Channel' ? 'Channel':
             item.Type == 'Customer - Direct' ? 'Direct' : '----'
        return {...item,newType}
        })       
    }
    if(error){
console.log(error);


    }
}
}