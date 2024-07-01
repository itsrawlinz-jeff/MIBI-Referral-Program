import { Module } from "@nestjs/common";
import { PaystackService } from "./paystack.service";
import { PaystackController } from "./paystack.controller";
import { PaystackResolver } from "./paystack.resolver";

@Module({
  controllers: [PaystackController],
  providers: [PaystackService, PaystackResolver],
  exports: [PaystackService],
})
export class PaystackModule {}
