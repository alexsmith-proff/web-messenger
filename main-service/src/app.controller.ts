import { Body, Controller, Request, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageInput } from './dto/create.message.input';
import { UpdateMessageInput } from './dto/update.message.input';
import { AuthRegisterInput } from './dto/auth.register.input';
import { AuthLoginInput } from './dto/auth.login.input';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('auth/profile')
  async getProfile(@Request() req) {
    // console.log('req1', req);    
    return this.appService.getProfile(req)
  }

  @Post('auth/register')
  async registerUser(@Body() authRegisterInput: AuthRegisterInput) {
    return this.appService.registerUser(authRegisterInput)
  }

  @Post('auth/login')
  async loginUser(@Body() authLoginInput: AuthLoginInput) {
    return this.appService.loginUser(authLoginInput)
  }



  @Post('message/create')
  create(@Body() createMessageInput: CreateMessageInput) {
    return this.appService.createMessage(createMessageInput);
  }

  @Get('message/user/:user_id')
  getMessages(@Param('user_id') user_id: string) {
    return this.appService.findMessages(+user_id);
  }
  @Patch('message/:id')
  updateMessage(@Param('id') id: string, @Body() updateMessageInput: UpdateMessageInput) {
    return this.appService.updateMessage(+id, updateMessageInput)
  }

  @Delete('message/:id')
  deleteMessage(@Param('id') id: string) {
    return this.appService.deleteMessage(+id)
  }

}
