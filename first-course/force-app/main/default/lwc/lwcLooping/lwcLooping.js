import { LightningElement } from 'lwc';

export default class LwcLooping extends LightningElement {
    carList = ["Ford", "Audi", "Benz", "Toyota", "BMW"];

    ceoList= [
        {
            id:1,
            company:"Google",
            name: "Sundar Pichai",
        },
        {
            id:2,
            company:"Apple Inc",
            name: "Tim Cook",
        }
        ,
        {
            id:3,
            company:"test",
            name: "1 2",
        },
        {
            id:4,
            company:"test Inc",
            name: "3 4",
        }
    ]
}