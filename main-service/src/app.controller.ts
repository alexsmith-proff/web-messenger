import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageInput } from './dto/create.message.input';
import { UpdateMessageInput } from './dto/update.message.input';

@Controller('api/message')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('create')
  create(@Body() createMessageInput: CreateMessageInput) {
    return this.appService.createMessage(createMessageInput);
  }

  @Get('user/:user_id')
  getMessages(@Param('user_id') user_id: string) {
    return this.appService.findMessages(+user_id);
  }
  @Patch(':id')
  updateMessage(@Param('id') id: string, @Body() updateMessageInput: UpdateMessageInput) {
    return this.appService.updateMessage(+id, updateMessageInput)
  }

  @Delete(':id')
  deleteMessage(@Param('id') id: string){
    return this.appService.deleteMessage(+id)
  }
}
