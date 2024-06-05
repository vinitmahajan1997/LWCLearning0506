import { LightningElement } from 'lwc';

export default class LifeCycleGrandParentComponent extends LightningElement {
    show = false
    connectedCallback(){
        console.log("In connected callback of Grant parent")
    }

    handleClick(){
        if(this.show == false) {
            this.show = true
        }
        else {
            this.show = false
        }
    }
}