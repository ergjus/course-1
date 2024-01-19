import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percent = 10;

    changeHandler(evt){
        this.percent = evt.target.value;
    }

    get percentage(){
        return `width:${this.percent}%`;
    }

}