import * as graphql from "@nestjs/graphql";
import { PaystackTransactionDto } from "../paystack/PaystackTransactionDto";
import { PaystackService } from "./paystack.service";

export class PaystackResolver {
  constructor(protected readonly service: PaystackService) {}

  @graphql.Mutation(() => String)
  async InitiateTransaction(
    @graphql.Args()
    args: PaystackTransactionDto
  ): Promise<string> {
    return this.service.InitiateTransaction(args);
  }

  @graphql.Mutation(() => String)
  async VerifyTransaction(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.VerifyTransaction(args);
  }
}
