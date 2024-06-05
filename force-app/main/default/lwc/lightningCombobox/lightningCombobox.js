import { LightningElement } from 'lwc';

export default class LightningCombobox extends LightningElement {
    value ='inProgress'
    
    get option(){
      return [ 
        { label:'New', value:'new'},
        { label: 'In progress', value: 'inProgress'},
        { label: 'Finished', value: 'finished'}
    ];
    }

    hnadleChange(event) {
        this.value = event.target.value
    }
}