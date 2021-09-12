import { Company } from "./company";
import { Message } from "./message";

export class CreateCompanyResponse {
    id: number;
    success: boolean;
    error: Message;
}