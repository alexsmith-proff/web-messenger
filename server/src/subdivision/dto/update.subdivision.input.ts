import { PartialType } from "@nestjs/mapped-types";
import { CreateSubDivisionInput } from "./create.subdivision.input";

export class UpdateSubDivisionInput extends PartialType(CreateSubDivisionInput) {}