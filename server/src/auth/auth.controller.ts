import { Body, Controller, Get, HttpCode, Post, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { AuthRegisterInput } from './dto/auth.register.input';
import { AuthLoginInput } from './dto/auth.login.input';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // @UsePipes(new ValidationPipe())
  // @HttpCode(200)
  @Post('register')
  async register(@Body() dto: AuthRegisterInput) {
    return this.authService.register(dto)
  }

  // @UsePipes(new ValidationPipe())
  // @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthLoginInput) {
    return this.authService.login(dto)
  }

  // @Auth() - защита. Только авторизованный пользователь может использовать этот endPoint
  @Auth()
  @Get('profile')
  async getProfile(@Request() req) {
    const token = req.headers.authorization.split(' ')[1]
    return this.authService.getProfile(token)
  }

}