import { PartialType } from "@nestjs/mapped-types";
import { CreateJobTitleInput } from "./create.jobtitle.input";

export class UpdateJobTitleInput extends PartialType(CreateJobTitleInput){}