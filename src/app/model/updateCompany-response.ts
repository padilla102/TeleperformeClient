import { Company } from "./company";
import { Message } from "./message";

export class UpdateCompanyResponse {
    company: Company;
    success: boolean;
    error: Message;
}