import { PreviousPolicy } from "./previous-policy.model";

export class Renewal {
    public HasPreviousCoverage: string;
    public IsVhclSubstitutionRenewal: string;
    public IsCvrgChangeRenewal: string;
    public PreviousPolicy: PreviousPolicy;
    public PolicyIdCode: string;
    public PolicyNumber: string;
    public ItemNumber: string;

    constructor(hasPreviousCoverage: string, isVhclSubsitutionRenewal: string, isCvrgChangeRenewal: string,
        previousPolicy: PreviousPolicy, policyId: string, policyNumber: string, itemNumber: string) {

        this.HasPreviousCoverage = hasPreviousCoverage;
        this.IsVhclSubstitutionRenewal = isVhclSubsitutionRenewal;
        this.IsCvrgChangeRenewal = isCvrgChangeRenewal;
        this.PreviousPolicy = previousPolicy;
        this.PolicyIdCode = policyId;
        this.PolicyNumber = policyNumber;
        this.ItemNumber = itemNumber;
    }
}