import { Injectable } from "@nestjs/common";
import { PaystackTransactionDto } from "../paystack/PaystackTransactionDto";

@Injectable()
export class PaystackService {
  constructor() {}
  async InitiateTransaction(args: PaystackTransactionDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async VerifyTransaction(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
