import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={} // for storing answers
    correctAnswers = 0; //to show the number of correct answers
    isSubmitted = false; //use to show the result
    myQuestions=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers: {
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the files is invalid in LWC Component folder?",
            answers: {
                a:".svb",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which of the following is not a directive?",
            answers: {
                a:"for:each",
                b:"if:true",
                c:"@true"
            },
            correctAnswer:"c"
        }
    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}` 
    }
    changeHandler(evt){
        console.log("name",evt.target.name);
        console.log("value ", evt.target.value);
        const {name, value} = evt.target;
        this.selected={...this.selected, [name]:value};
    }

    submitHandler(evt){
        evt.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
    }

    resetHandler(evt){
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}