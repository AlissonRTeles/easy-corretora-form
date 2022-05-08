import { CoverageReference } from "./coverage-reference.model";
import { Deductible } from "./deductible.model";

export class VehicleCoverage {
        public CoverageReference: CoverageReference;
        public InsuredAmount: string;
        public OptionalPercentage: string;
        public ItemDescription: string;
        public Deductible: Deductible;

        constructor(coverageRefence: CoverageReference, insuredAmount: string, optionalPercentage: string, itemDescription: string, deductible: Deductible) {
                this.CoverageReference = coverageRefence;
                this.InsuredAmount = insuredAmount;
                this.OptionalPercentage = optionalPercentage;
                this.ItemDescription = itemDescription;
                this.Deductible = deductible;
        }
}