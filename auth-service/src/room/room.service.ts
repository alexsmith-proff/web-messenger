import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomEntity } from './entities/room.entity';
import { CreateRoomInput } from './dto/create.room.input';
import { UpdateRoomInput } from './dto/update.room.input';

let getSlug = require('speakingurl')

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>
  ){}

  async create(createRoomInput: CreateRoomInput): Promise<RoomEntity> {
    return await this.roomRepository.save({
      ...createRoomInput,
      slug: createRoomInput.slug === '' ? getSlug(createRoomInput.name) : createRoomInput.slug
    })
  }

  async findAll(): Promise<RoomEntity[]> {
    return await this.roomRepository.find({ relations: { users: true } })
  }

  async findOne(id: number): Promise<RoomEntity> {
    return await this.roomRepository.findOne({ where: {id}, relations: {users: true }});
  }

  async update(id: number, updateRoomInput: UpdateRoomInput): Promise<RoomEntity> {
    await this.roomRepository.update(id, updateRoomInput)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const room = await this.findOne(id)
    await this.roomRepository.delete(id)
    return room
  }
}