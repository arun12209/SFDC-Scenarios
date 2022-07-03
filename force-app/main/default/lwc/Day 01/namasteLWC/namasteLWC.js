import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
export default class NamasteLWC extends LightningElement {
    error;
    name;
    @wire(getRecord, {
        recordId: Id,
        fields: [NAME_FIELD]
    }) wireuser({error,data}) {
        if (error) {
           this.error = error ; 
        } else if (data) {
            //assign user name
            this.name = data.fields.Name.value;
        }
    }
}