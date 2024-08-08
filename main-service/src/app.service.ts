import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { UpdateMessageInput } from './dto/update.message.input';
import { CreateMessageInput } from './dto/create.message.input';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService){}

  createMessage(createMessageInput: CreateMessageInput) {
    const message = this.httpService.post(`${process.env.MESSAGES_SERVICE_API_HOST}/api/message/create`, createMessageInput)
    .pipe(map((res) => res.data))
    .pipe(
      catchError(() => {
        throw new ForbiddenException('API not available');
      }),
    );
    return message
  }

  findMessages(user_id: number) {
    const messages = this.httpService.get(`${process.env.MESSAGES_SERVICE_API_HOST}/api/message/user/${user_id}`)
    .pipe(map((res) => res.data))
    .pipe(
      catchError(() => {
        throw new ForbiddenException('API not available');
      }),
    );
    return messages
  }

  updateMessage(id: number, updateMessageInput: UpdateMessageInput) {
    const message = this.httpService.patch(`${process.env.MESSAGES_SERVICE_API_HOST}/api/message/${id}`, updateMessageInput)
    .pipe(map((res) => res.data))
    .pipe(
      catchError(() => {
        throw new ForbiddenException('API not available');
      }),
    );
    return message
  }

  deleteMessage(id: number) {
    const message = this.httpService.delete(`${process.env.MESSAGES_SERVICE_API_HOST}/api/message/${id}`)
    .pipe(map((res) => res.data))
    .pipe(
      catchError(() => {
        throw new ForbiddenException('API not available');
      }),
    );
    return message
  }

}
