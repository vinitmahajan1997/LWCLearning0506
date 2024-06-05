import { LightningElement } from 'lwc';

export default class LifeCycleParentComponent extends LightningElement {
    show = false
    constructor(){
        super();
        console.log("In constructor")
    }

    connectedCallback(){
        //just after adding the component do this
        console.log("In connected callback")
    }

    renderedCallback(){
        console.log("In rendered callback")
    }

    handleClick()
    {
        if(this.show == false){
            this.show=true
        }
        else{
            this.show=false
        }
    }

}