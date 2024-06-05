import { LightningElement, track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
    @track principal = 0;
    @track rate = 0;
    @track time = 0;
    amount = this.principal* (1 + (this.rate * this.time ));
}