import { Broker } from "./broker.model";
import { CommissionParticipation } from "./comission-participation.model";
import { Dealer } from "./dealer.model";
import { EmployeeData } from "./employee-data.model";
import { SalesStructure } from "./sales-structure.model";
import { Vehicles } from "./vehicles.model";

export class CalculateRequestAuto {
    public SalesPartnerCode: string;
    public BrokerProposalNumber: string;
    public StartDate: string;
    public ReferenceDate: string;
    public EndDate: string;
    public CommissionPct: string;
    public PaymentDayOfMonth: string;
    public AffinityCommPlanCode: string;
    public AffinityAccountCode: string;
    public AffinityAccountBranchCode: string;
    public CommercialProductCode: string;
    public PolicyHolderIsEmployee: string;
    public PromotionalCode: string;
    public SalesStructure: SalesStructure;
    public Dealer: Dealer;
    public Broker: Broker;
    public CommissionParticipation: CommissionParticipation;
    public EmployeeData: EmployeeData;
    public Vehicles: Vehicles;
    public NewPaymentForm: string;
    public AutomaticAdjustmentFactor: string;

    constructor(salesPartner: string, brokerProposalNumber: string,
        startDate: string, referenceDate: string, endDate: string, commissionPct: string, paymentDayOfMonth: string,
        affinityCommPlanCode: string, affinityAccountCode: string, affinityAccountBranchCode: string, commercialProductCode: string,
        policyHolderIsEmployee: string, promotionalCode: string, salesStructure: SalesStructure, dealer: Dealer, broker: Broker,
        commissionParticipation: CommissionParticipation, employeeData: EmployeeData, vehicles: Vehicles, newPaymentForm: string, automaticAdjustmentFactor: string) {
        this.SalesPartnerCode = salesPartner;
        this.BrokerProposalNumber = brokerProposalNumber;
        this.StartDate = startDate;
        this.ReferenceDate = referenceDate;
        this.EndDate = endDate;
        this.CommissionPct = commissionPct;
        this.PaymentDayOfMonth = paymentDayOfMonth;
        this.AffinityCommPlanCode = affinityCommPlanCode;
        this.AffinityAccountCode = affinityAccountCode;
        this.AffinityAccountBranchCode = affinityAccountBranchCode;
        this.CommercialProductCode = commercialProductCode;
        this.PolicyHolderIsEmployee = policyHolderIsEmployee;
        this.PromotionalCode = promotionalCode;
        this.SalesStructure = salesStructure;
        this.Dealer = dealer;
        this.Broker = broker;
        this.CommissionParticipation = commissionParticipation;
        this.EmployeeData = employeeData;
        this.Vehicles = vehicles;
        this.NewPaymentForm = newPaymentForm;
        this.AutomaticAdjustmentFactor = automaticAdjustmentFactor;
    }
}