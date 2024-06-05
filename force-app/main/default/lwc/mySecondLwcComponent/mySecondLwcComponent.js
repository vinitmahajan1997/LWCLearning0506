import { LightningElement, track} from 'lwc';

export default class MySecondLwcComponent extends LightningElement {
   @track username = ""
   @track contacts =[{"name":"Ram"}]
   //@track show = false

   handleList(){  
       if(this.username === "v")
         this.contacts =[{"name" : "Ram"},{"name" : "Narayan"}]
      }      
}