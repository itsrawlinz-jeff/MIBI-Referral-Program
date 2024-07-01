import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SettingsService } from "./settings.service";

@swagger.ApiTags("settings")
@common.Controller("settings")
export class SettingsController {
  constructor(protected readonly service: SettingsService) {}
}
