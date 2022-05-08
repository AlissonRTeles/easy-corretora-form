export class EmployeeData {
    public EmployeeName: string;
    public TitleCode: string;
    public DepartmentCode: string;
    public EmployeeCode: string;
    public RelationType: string;
    public PublicIdNumber: string;

    constructor(name: string, titleCode: string, departmentCode: string, employeeCode: string, relationType: string, publicID: string) {
        this.EmployeeName = name;
        this.TitleCode = titleCode;
        this.DepartmentCode = departmentCode;
        this.EmployeeCode = employeeCode;
        this.RelationType = relationType;
        this.PublicIdNumber = publicID
    }
}