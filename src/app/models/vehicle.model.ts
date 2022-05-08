import { AdaptationCodes } from "./adaptation-codes.model";
import { PotentialDrivers } from "./potential-drivers.model";
import { ReferenceDriverProfile } from "./reference-driver-profile.model";
import { Renewal } from "./renewal.model";
import { VehicleCoverages } from "./vehicle-coverages.model";

export class Vehicle {
    public SequenceNumber: string;
    public ModelYear: string;
    public ManufactureYear: string;
    public Is0KM: string;
    public DealerExitDateTime: string;
    public IsDealerOwnerVehicle: string;
    public ValueEstimationType: string;
    public SurchargeFactor: string;
    public HasLoJack: string;
    public LoJackCode: string;
    public AdjustmentFactor: string;
    public ZipCode: string;
    public CategoryCode: string;
    public FIPECode: string;
    public Fuel: string;
    public Plate: string;
    public Chassis: string;
    public IsRgnDiscSupported: string;
    public RegionalDiscountPct: string;
    public PromotionalDiscountVlr: string;
    public UsageCode: string;
    public AdditionalInfo: string;
    public FinancialStatementIndicator: string;
    public TaxExemptionStartDate: string;
    public TaxExemptionReasoningCode: string;
    public AdaptationCodes: AdaptationCodes;
    public Renewal: Renewal;
    public PotentialDrivers: PotentialDrivers;
    public ReferenceDriverProfile: ReferenceDriverProfile;
    public VehicleCoverages: VehicleCoverages;
    public VehicleOwnerIsPolicyHolder: string;
    public FinancingAgent: string;
    public InvoiceNumber: string;
    public DealershipName: string;
    public LoJackNum: string;

    constructor(
        sequence: string, modelYear: string, manufactureYear: string, isZeroKM: string,
        dealerExitDateTime: string, isDealerOwnerVehicle: string, valueEstimationType: string,
        surchargeFactor: string, hasLojack: string, lojackCode: string, adjustmentFactor: string, zipCode: string, categodyCode: string,
        fipeCode: string, fuel: string, plate: string, chassis: string, isRgnDiscSupported: string, regionalDiscountPct: string,
        promotionalDiscountVlr: string, usageCode: string, additionalInfo: string, financialStatementIndicator: string, taxExemptionReasoningCode: string,
        adatptationCodes: AdaptationCodes, renewal: Renewal, potentialDrivers: PotentialDrivers, referenceDriverProfile: ReferenceDriverProfile, vehicleCoverages: VehicleCoverages,
        vehicleOwnerIsPolicyHolder: string, financingAgent: string, invoiceNumber: string, DealershipName: string, lojackNum: string
    ) {
        this.SequenceNumber = sequence;
        this.ModelYear = modelYear;
        this.ManufactureYear = manufactureYear;
        this.Is0KM = isZeroKM;
        this.DealerExitDateTime = dealerExitDateTime;
        this.IsDealerOwnerVehicle = isDealerOwnerVehicle;
        this.ValueEstimationType = valueEstimationType;
        this.SurchargeFactor = surchargeFactor;
        this.HasLoJack = hasLojack;
        this.LoJackCode = lojackCode;
        this.AdjustmentFactor = adjustmentFactor;
        this.ZipCode = zipCode;
        this.CategoryCode = categodyCode;
        this.FIPECode = fipeCode;
        this.Fuel = fuel;
        this.Plate = plate;
        this.Chassis = chassis;
        this.IsRgnDiscSupported = isRgnDiscSupported;
        this.RegionalDiscountPct = regionalDiscountPct;
        this.PromotionalDiscountVlr = promotionalDiscountVlr;
        this.UsageCode = usageCode;
        this.AdditionalInfo = additionalInfo;
        this.FinancialStatementIndicator = financialStatementIndicator;
        this.TaxExemptionStartDate = taxExemptionReasoningCode;
        this.TaxExemptionReasoningCode = taxExemptionReasoningCode;
        this.AdaptationCodes = adatptationCodes;
        this.Renewal = renewal;
        this.PotentialDrivers = potentialDrivers;
        this.ReferenceDriverProfile = referenceDriverProfile;
        this.VehicleCoverages = vehicleCoverages;
        this.VehicleOwnerIsPolicyHolder = vehicleOwnerIsPolicyHolder;
        this.FinancingAgent = financingAgent;
        this.InvoiceNumber = invoiceNumber;
        this.DealershipName = DealershipName;
        this.LoJackNum = lojackNum;
    }
}