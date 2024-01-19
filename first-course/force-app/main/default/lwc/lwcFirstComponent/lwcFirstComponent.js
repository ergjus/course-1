import { LightningElement, track } from 'lwc';

export default class LwcFirstComponent extends LightningElement {

    name = "Ergjus";
    title = 'Developer';
    //method
    changeHandler(event){
        this.title = event.target.value;
    }

    address = {
        city : "New York City",
        zipCode : "11106",
        country : "USA"
    }

    trackHandler(event){
        // this.address.city = event.target.value
        // we can use this instead of using a @track property. According to JS its best we create a copy rather than update the actual object
        this.address = {...this.address, "city":event.target.value}
    }

    // getter example
    users = ["eri", "dorti", "tili"]
    num1 = 10
    num2= 2

    get firstUser(){
        return this.users[0]
    }

    get multiply(){
        return this.num1 * this.num2
    }
}