import { PartialType } from "@nestjs/mapped-types";
import { CreateRoomInput } from "./create.room.input";

export class UpdateRoomInput extends PartialType(CreateRoomInput) {}