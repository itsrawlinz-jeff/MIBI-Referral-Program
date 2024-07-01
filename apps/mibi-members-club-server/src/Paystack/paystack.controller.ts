import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaystackService } from "./paystack.service";

@swagger.ApiTags("paystacks")
@common.Controller("paystacks")
export class PaystackController {
  constructor(protected readonly service: PaystackService) {}

  @common.Post("/paystack/transaction/initiate")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiateTransaction(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.InitiateTransaction(body);
      }

  @common.Post("/paystack/transaction/verify/:reference")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyTransaction(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.VerifyTransaction(body);
      }
}
