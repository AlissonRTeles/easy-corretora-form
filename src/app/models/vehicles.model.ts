import { Vehicle } from "./vehicle.model";

export class Vehicles {
    public Vehicle: Array<Vehicle>;
    
    constructor(vehicleList: Array<Vehicle>) {
        this.Vehicle = vehicleList
    }
}