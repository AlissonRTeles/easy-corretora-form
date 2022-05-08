export class Deductible {
    public Code: string;
    public Level: string;
    
    constructor(code: string, level: string) {
        this.Code = code;
        this.Level = level;
    }
}