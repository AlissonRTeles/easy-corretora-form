import { Question } from "./question.model";

export class ReferenceDriverProfile {
    public Question: Array<Question>;
    
    constructor(question: Array<Question>) {
        this.Question = question;
    }
}