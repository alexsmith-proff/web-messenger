import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { UpdateMessageInput } from './dto/update.message.input';
import { CreateMessageInput } from './dto/create.message.input';
import { AuthRegisterInput } from './dto/auth.register.input';
import { AuthLoginInput } from './dto/auth.login.input';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  registerUser(authRegisterInput: AuthRegisterInput){
    const data = this.httpService.post(`${process.env.AUTH_SERVICE_API_HOST}/api/auth/register`, authRegisterInput)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          throw new ForbiddenException(e.response.data.message, e.response.data.error)
        }),
      );
    return data
  }

  loginUser(authLoginInput: AuthLoginInput){
    const data = this.httpService.post(`${process.env.AUTH_SERVICE_API_HOST}/api/auth/login`, authLoginInput)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          throw new ForbiddenException(e.response.data.message, e.response.data.error)
        }),
      );
    return data
  }

  getProfile(req) {
    const profile = this.httpService.get(`${process.env.AUTH_SERVICE_API_HOST}/api/auth/profile`, {headers: {Authorization: req.headers.authorization} } ) 
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          throw new ForbiddenException(e.response.data.message, e.response.data.error)
        }),
      );
    return profile
  }

  createMessage(createMessageInput: CreateMessageInput) {
    const message = this.httpService.post(`${process.env.MESSAGES_SERVICE_API_HOST}/api/message/create`, createMessageInput)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          throw new ForbiddenException(e.response.data.message, e.response.data.error)
        }),
      );
    return message
  }

  findMessages(user_id: number) {
    const messages = this.httpService.get(`${process.env.MESSAGES_SERVICE_API_HOST}/api/message/user/${user_id}`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          throw new ForbiddenException(e.response.data.message, e.response.data.error)
        }),
      );
    return messages
  }

  updateMessage(id: number, updateMessageInput: UpdateMessageInput) {
    const message = this.httpService.patch(`${process.env.MESSAGES_SERVICE_API_HOST}/api/message/${id}`, updateMessageInput)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          throw new ForbiddenException(e.response.data.message, e.response.data.error)
        }),
      );
    return message
  }

  deleteMessage(id: number) {
    const message = this.httpService.delete(`${process.env.MESSAGES_SERVICE_API_HOST}/api/message/${id}`)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          throw new ForbiddenException(e.response.data.message, e.response.data.error)
        }),
      );
    return message
  }

}
