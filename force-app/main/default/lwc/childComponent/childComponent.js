import { LightningElement ,api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api greetings;
    @api person = {};
    //send custom event
    handleClick(){
        this.person.firstName = "Arun";
        this.person.lastName = "Kumar";
        this.person.age = 27;
        this.person.eyeColor = "gray";
        // Creates the event with the person data.
        const clickEvent = new CustomEvent('selected', { detail: this.person });
        // Dispatches the event.
        this.dispatchEvent(clickEvent);
    }
}