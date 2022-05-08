export class BrokerCommission {
    public BrokerCode: string;
    public BrokerBranchCode: string;
    public ParticipationPct: string;

    constructor(code: string, branchCode: string, participationPct: string) {
        this.BrokerCode = code;
        this.BrokerBranchCode = branchCode;
        this.ParticipationPct = participationPct;

    }
}