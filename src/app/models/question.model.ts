export class Question {
    public QuestionNumber: string;
    public AnswerChoiceCode: string;
    public InputAnswer: string;
    
    constructor(number: string, choiceCode: string, inputAnswer: string) {
        this.QuestionNumber = number;
        this.AnswerChoiceCode = choiceCode;
        this.InputAnswer = inputAnswer;
    }
}