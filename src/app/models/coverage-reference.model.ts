export class CoverageReference {
    public CoverageCode: string;
    public LineItemCode: string;

    constructor(coverageCode: string, lineItemCode: string) {
        this.CoverageCode = coverageCode;
        this.LineItemCode = lineItemCode;
    }
}