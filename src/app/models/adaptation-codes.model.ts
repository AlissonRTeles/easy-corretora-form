import { AdaptationCode } from "./adaptation-code.model";

export class AdaptationCodes {
    public AdapatationCode: Array<AdaptationCode>;

    constructor(adaptationCode: Array<AdaptationCode>) {
        this.AdapatationCode = adaptationCode;
    }
}