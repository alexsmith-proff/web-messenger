import { PartialType } from "@nestjs/mapped-types";
import { CreateSettingsInput } from "./create.settings.input";

export class UpdateSettingsInput extends PartialType(CreateSettingsInput) {}