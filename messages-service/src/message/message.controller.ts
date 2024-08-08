import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageInput } from './dto/create.message.input';
import { UpdateMessageInput } from './dto/update.message.input';

@Controller('api/message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('create')
  create(@Body() createMessageInput: CreateMessageInput) {
    return this.messageService.create(createMessageInput);
  }

  @Get('user/:user_id')
  findByUser(@Param('user_id') user_id: string){
    return this.messageService.findAllByUser(+user_id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageInput: UpdateMessageInput) {
    return this.messageService.update(+id, updateMessageInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(+id);
  }
}