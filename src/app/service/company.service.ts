import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { environment } from 'src/environments/environment';
import { FindCompanyResponse } from "../model/FindCompany-response";
import { UpdateCompanyResponse } from "../model/updateCompany-response";
import { Company } from "../model/company";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    constructor(protected http: BaseService) {}
    private url = `${environment.apiUrl}/api/Company`;

    public findRegister(number:string) {
        const params:URLSearchParams = new URLSearchParams();
        params.append('identificationNumber', number);
        return this.http.doGet<FindCompanyResponse>(`${this.url}?identificationNumber=${number}`);
    }

    public createRegister(id:number, company:Company) {
        return this.http.doPost<Company, any>(`${this.url}`,company)
    }

    public updateRegister(id:number, company:Company) {
        return this.http.doPut<Company, any>(`${this.url}/${id}`,company)
    }
}
