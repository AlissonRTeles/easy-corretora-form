import { Levels } from "./levels.model";

export class SalesStructure {
    public PublicIdNumber: string;
    public Levels: Levels;
    
    constructor(id: string, levels: Levels) {
        this.PublicIdNumber = id;
        this.Levels = levels;
    }
}