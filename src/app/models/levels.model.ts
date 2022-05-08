import { Level } from "./level.model";

export class Levels {
    public Level: Array<Level>;

    constructor(level: Array<Level>) {
        this.Level = level;
    }
}