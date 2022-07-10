import { LightningElement,wire } from 'lwc';
export default class DataBindingComponent extends LightningElement {
    username = 'SFDC Lesson';
    email = 'admin@sfdclesson.com';

    handleChange(event) {
        console.log('event: '+ event);
        
        if(event.target.label === 'Name'){
            this.username = event.target.value;
        }
        if(event.target.label === 'Email'){
            this.email = event.target.value;
        }
    }
}