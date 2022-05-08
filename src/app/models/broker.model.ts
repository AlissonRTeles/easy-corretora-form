export class Broker {
    public BrokerCode: string;
    public BrokerBranchCode: string;
    public InternalBranchCode: string;
    
    constructor(code: string, branchCode: string, internalBranchCode: string) {
        this.BrokerCode = code;
        this.BrokerBranchCode = branchCode;
        this.InternalBranchCode = internalBranchCode;
    }
}