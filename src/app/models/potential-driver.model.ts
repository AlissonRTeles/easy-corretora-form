export class PotentialDriver {
    public IsPolicyHolder: string;
    public BirthDate: string;
    public PublicIdNumber: string;
    public Gender: string;
    public Name: string;
    public IsDriver: string;
    public DaysPerWeek: string;
    public IsReferenceDriver: string;
    public MaritalStatus: string;
    public DriverType: string;
    public IsIndividual: string;
    public RelationalTypeCode: string;

    constructor(isPolicyHolder: string, birthDate: string, publicIdNumber: string,
        gender: string, name: string, isDriver: string, daysPerWeek: string, isReferenceDriver: string,
        maritalStatus: string, driverType: string, isIndividual: string, relationalTypeCode: string) {
        this.IsPolicyHolder = isPolicyHolder;
        this.BirthDate = birthDate;
        this.PublicIdNumber = publicIdNumber;
        this.Gender = gender;
        this.Name = name;
        this.IsDriver = isDriver;
        this.DaysPerWeek = daysPerWeek;
        this.IsReferenceDriver = isReferenceDriver;
        this.MaritalStatus = maritalStatus;
        this.DriverType = driverType;
        this.IsIndividual = isIndividual;
        this.RelationalTypeCode = relationalTypeCode;
    }
}