export class Dealer {
    public DealerCode: string;
    public DealerBranchCode: string;
    public InternalBranchCode: string;
    
    constructor(code: string, branchCode: string, internalBranchCode: string) {
        this.DealerCode = code;
        this.DealerBranchCode = branchCode;
        this.InternalBranchCode = internalBranchCode;
    }
}