import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageDataInput } from './create.messagedata.input';
export class UpdateMessageDataInput extends PartialType(CreateMessageDataInput){}