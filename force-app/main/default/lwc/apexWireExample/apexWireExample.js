import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountListInfo.getAccountList';

export default class apexWireExample extends LightningElement {
@wire(getAccountList)
accounts;
}