import { LightningElement } from 'lwc';

export default class LifeCycleChildComponent extends LightningElement {
    constructor(){
        super();
        console.log("In child constructor")
    }
    connectedCallback(){
        //just after adding the component do this
        console.log("In child connected callback")
    }

    renderedCallback(){
        console.log("In child rendered callback")
    }
    disconnectedCallback(){
        console.log("In disconneted callback of Child component")
    }
}