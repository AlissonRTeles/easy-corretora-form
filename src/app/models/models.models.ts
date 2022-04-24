declare module namespace {

    export interface SalesStructure {
        PublicIdNumber: string;
    }

    export interface Broker {
        BrokerCode: string;
        BrokerBranchCode: string;
        InternalBranchCode: string;
    }

    export interface BrokerCommission {
        BrokerCode: string;
        BrokerBranchCode: string;
        ParticipationPct: string;
    }

    export interface CommissionParticipation {
        BrokerCommission: BrokerCommission[];
    }

    export interface EmployeeData {
        EmployeeName: string;
        TitleCode: string;
        DepartmentCode: string;
        PublicIdNumber: string;
        RelationType: string;
    }

    export interface AdaptationCodes {
        AdaptationCode: any[];
    }

    export interface VehicleOwnerData {
        VehicleOwnerName: string;
        PublicIdNumber: string;
        RelationType: string;
    }

    export interface PotentialDriver {
        IsPolicyHolder: string;
        BirthDate: string;
        PublicIdNumber: string;
        Gender: string;
        Name: string;
        IsDriver: string;
        DaysPerWeek: string;
        IsReferenceDriver: string;
        MaritalStatus: string;
        DriverType: string;
        IsIndividual: string;
        RelationalTypeCode: string;
    }

    export interface PotentialDrivers {
        PotentialDriver: PotentialDriver[];
    }

    export interface Question {
        QuestionNumber: string;
        AnswerChoiceCode: string;
    }

    export interface ReferenceDriverProfile {
        Question: Question[];
    }

    export interface CoverageReference {
        CoverageCode: string;
        LineItemCode: string;
    }

    export interface Deductible {
        Code: string;
        Level: string;
    }

    export interface VehicleCoverage {
        CoverageReference: CoverageReference;
        InsuredAmount: string;
        OptionalPercentage: string;
        Deductible: Deductible;
    }

    export interface VehicleCoverages {
        VehicleCoverage: VehicleCoverage[];
    }

    export interface Vehicle {
        ModelYear: string;
        ManufactureYear: string;
        Is0KM: string;
        dealerExitDateTime: string;
        IsDealerOwnerVehicle: string;
        ValueEstimationType: string;
        SurchargeFactor: string;
        HasLoJack: string;
        LoJackCode: string;
        AdjustmentFactor: string;
        ZipCode: string;
        CategoryCode: string;
        FIPECode: string;
        Fuel: string;
        IsRgnDiscSupported: string;
        VehicleOwnerIsPolicyHolder: string;
        UsageCode: string;
        AdaptationCodes: AdaptationCodes;
        VehicleOwnerData: VehicleOwnerData;
        PotentialDrivers: PotentialDrivers;
        ReferenceDriverProfile: ReferenceDriverProfile;
        VehicleCoverages: VehicleCoverages;
        SequenceNumber: string;
        Plate: string;
        Chassis: string;
    }

    export interface Vehicles {
        Vehicle: Vehicle[];
    }

    export interface CalculateRequestAuto {
        CustomerTrackingName: string;
        BrokerProposalNumber: string;
        SalesPartnerCode: string;
        StartDate: string;
        EndDate: string;
        CommissionPct: string;
        AffinityCommPlanCode: string;
        AffinityAccountCode: string;
        AffinityAccountBranchCode: string;
        PolicyHolderIsEmployee: string;
        CommercialProductCode: string;
        SalesStructure: SalesStructure;
        Broker: Broker;
        CommissionParticipation: CommissionParticipation;
        EmployeeData: EmployeeData;
        Vehicles: Vehicles;
    }

    export interface RootObject {
        CalculateRequestAuto: CalculateRequestAuto;
    }

}

