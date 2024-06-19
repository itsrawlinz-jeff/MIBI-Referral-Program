import { Module } from "@nestjs/common";
import { AdminDashboardService } from "./admindashboard.service";
import { AdminDashboardController } from "./admindashboard.controller";
import { AdminDashboardResolver } from "./admindashboard.resolver";

@Module({
  controllers: [AdminDashboardController],
  providers: [AdminDashboardService, AdminDashboardResolver],
  exports: [AdminDashboardService],
})
export class AdminDashboardModule {}
