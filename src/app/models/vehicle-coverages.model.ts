import { VehicleCoverage } from "./vehicle-coverage.model";

export class VehicleCoverages {
    public VehicleCoverage: Array<VehicleCoverage>;
    
    constructor(vehicleCoverage: Array<VehicleCoverage>) {
        this.VehicleCoverage = vehicleCoverage;
    }
}