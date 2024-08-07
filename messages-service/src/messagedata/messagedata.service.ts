import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageDataEntity } from './entities/messagedata.entity';
import { CreateMessageDataInput } from './dto/create.messagedata.input';
import { UpdateMessageDataInput } from './dto/update.messagedata.input';

@Injectable()
export class MessageDataService {
    constructor(
        @InjectRepository(MessageDataEntity)
        private readonly messageDataRepository: Repository<MessageDataEntity>
    ) { }

    async create(createMessageDataInput: CreateMessageDataInput): Promise<MessageDataEntity> {
        return await this.messageDataRepository.save({ ...createMessageDataInput })
    }

    async findAll(): Promise<MessageDataEntity[]> {
        return await this.messageDataRepository.find({ relations: { message: true } })
    }

    async findOne(id: number): Promise<MessageDataEntity> {
        return await this.messageDataRepository.findOne({ where: { id }, relations: { message: true } });
    }

    async update(id: number, updateMessageDataInput: UpdateMessageDataInput): Promise<MessageDataEntity> {
        await this.messageDataRepository.update(id, updateMessageDataInput)
        return await this.findOne(id)
    }

    async remove(id: number) {
        const messageData = await this.findOne(id)
        await this.messageDataRepository.delete(id)
        return messageData
    }
}

