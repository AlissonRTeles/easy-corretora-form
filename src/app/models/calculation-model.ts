import { CalculateRequestAuto } from "./calculate-request-auto.models";

export class CalculationModel{
    public CalculateRequestAuto: CalculateRequestAuto;
    public Usuario: string;

    constructor(requestAuto:CalculateRequestAuto, usuario:string) {
        this.CalculateRequestAuto = requestAuto;
        this.Usuario = usuario;
    }
}