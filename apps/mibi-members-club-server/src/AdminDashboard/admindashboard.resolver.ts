import * as graphql from "@nestjs/graphql";
import { AdminDashboardService } from "./admindashboard.service";

export class AdminDashboardResolver {
  constructor(protected readonly service: AdminDashboardService) {}
}
