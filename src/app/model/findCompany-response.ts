import { Company } from "./company";
import { Message } from "./message";

export class FindCompanyResponse {
    company: Company;
    success: boolean;
    error: Message;
}
