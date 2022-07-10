import { LightningElement,track } from 'lwc';

export default class DataFlowExample extends LightningElement {
    //person object 
    @track personData = {};


    handleClickEvent(event){
        event.detail.firstName = 'Sunjv';
        const eventData = event.detail;
        eventData.firstName = 'Suman';
        this.personData = eventData;
        
        
        console.log('person data: '+ JSON.stringify(this.personData));
        
    }
}