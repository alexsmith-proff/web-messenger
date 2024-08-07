import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageDataService } from './messagedata.service';
import { CreateMessageDataInput } from './dto/create.messagedata.input';
import { UpdateMessageDataInput } from './dto/update.messagedata.input';

@Controller('api/messagedata')
export class MessageDataController {
  constructor(private readonly messageDataService: MessageDataService) {}

  @Post('create')
  create(@Body() createMessageDataInput: CreateMessageDataInput) {
    return this.messageDataService.create(createMessageDataInput);
  }

  @Get()
  findAll() {
    return this.messageDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDataInput: UpdateMessageDataInput) {
    return this.messageDataService.update(+id, updateMessageDataInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageDataService.remove(+id);
  }
}