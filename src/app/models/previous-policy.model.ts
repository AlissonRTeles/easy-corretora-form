export class PreviousPolicy {
    public StartDate: string;
    public EndDate: string;
    public HasClaim: string;
    public InsurerSUSEPCode: string;
    public BonusClassCode: string;
    public ClaimQuantity: string;
    public PolicyNumber: string;
    public ItemNumber: string;

    constructor(startDate: string, endDate: string, hasClaim: string, insurerSUSEPCode: string,
        bonusClassCode: string, claimQuantity: string, policyNumer: string, itemNumber: string) {
        this.StartDate = startDate;
        this.EndDate = endDate;
        this.HasClaim = hasClaim;
        this.InsurerSUSEPCode = insurerSUSEPCode;
        this.BonusClassCode = bonusClassCode;
        this.ClaimQuantity = claimQuantity;
        this.PolicyNumber = policyNumer;
        this.ItemNumber = itemNumber;
    }
}