import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminDashboardService } from "./admindashboard.service";

@swagger.ApiTags("adminDashboards")
@common.Controller("adminDashboards")
export class AdminDashboardController {
  constructor(protected readonly service: AdminDashboardService) {}
}
