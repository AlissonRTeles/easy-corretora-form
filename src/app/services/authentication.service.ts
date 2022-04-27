import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DispatcherService } from "./dispatcher.service";

@Injectable()
export class AuthenticationService {
    private INSURER_URI: string = ('https://test-apis.libertyseguros.com.br/cotador/auto/sandbox/v1/Autenticacao/Token?grant_type=client_credentials');

    constructor(private dispatcherService: DispatcherService) { }

    public getAuthenticationToken = (): Observable<any> => {
        const url = `${this.INSURER_URI}`;
        return this.dispatcherService.getAsync<any>(url);
    }
}