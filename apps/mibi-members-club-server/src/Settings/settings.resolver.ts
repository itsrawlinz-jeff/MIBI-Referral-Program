import * as graphql from "@nestjs/graphql";
import { SettingsService } from "./settings.service";

export class SettingsResolver {
  constructor(protected readonly service: SettingsService) {}
}
