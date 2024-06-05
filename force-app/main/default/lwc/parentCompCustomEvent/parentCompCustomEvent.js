import { LightningElement, track} from 'lwc';

export default class ParentCompCustomEvent extends LightningElement {
    @track message = "";
    @track messageCaughtFromMyCustomEvent ="";

    constructor(){
        super()
        this.template.addEventListener('mycustomevent', this.handleCsListener.bind(this))
    }

    handleCsListener(event){
        this.messageCaughtFromMyCustomEvent = event.detail
    }

    listenChange(event){
        this.message = event.detail;
    }
}