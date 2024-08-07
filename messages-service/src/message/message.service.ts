import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from './entities/message.entity';
import { CreateMessageInput } from './dto/create.message.input';
import { UpdateMessageInput } from './dto/update.message.input';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>
  ){}

  async create(createMessageInput: CreateMessageInput): Promise<MessageEntity> {
    return await this.messageRepository.save({...createMessageInput})
  }

  async findAll(): Promise<MessageEntity[]> {
    return await this.messageRepository.find({ relations: { data: true } })
  }

  async findOne(id: number): Promise<MessageEntity> {
    return await this.messageRepository.findOne({ where: {id}, relations: {data: true }})
  }

  async update(id: number, updateMessageInput: UpdateMessageInput): Promise<MessageEntity> {
    await this.messageRepository.update(id, updateMessageInput)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const message = await this.findOne(id)
    await this.messageRepository.delete(id)
    return message
  }
}