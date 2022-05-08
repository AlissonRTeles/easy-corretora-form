import { BrokerCommission } from "./broker-commission.model";

export class CommissionParticipation {
    public BrokerCommission: Array<BrokerCommission>;

    constructor(brokerCommissions: Array<BrokerCommission>) {
        this.BrokerCommission = brokerCommissions;
    }
}