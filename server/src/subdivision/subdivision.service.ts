import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubDivisionEntity } from './entities/subdivision.entity';
import { CreateSubDivisionInput } from './dto/create.subdivision.input';
import { UpdateSubDivisionInput } from './dto/update.subdivision.input';

let getSlug = require('speakingurl')

@Injectable()
export class SubDivisionService {
  constructor(
    @InjectRepository(SubDivisionEntity)
    private readonly subDivisionRepository: Repository<SubDivisionEntity>
  ){}

  async create(createSubDivisionInput: CreateSubDivisionInput): Promise<SubDivisionEntity> {
    return await this.subDivisionRepository.save({
      ...createSubDivisionInput,
      slug: createSubDivisionInput.slug === '' ? getSlug(createSubDivisionInput.name) : createSubDivisionInput.slug
    })
  }

  async findAll(): Promise<SubDivisionEntity[]> {
    return await this.subDivisionRepository.find({ relations: { users: true } })
  }

  async findOne(id: number): Promise<SubDivisionEntity> {
    return await this.subDivisionRepository.findOne({ where: {id}, relations: {users: true }});
  }

  async update(id: number, updateSubDivisionInput: UpdateSubDivisionInput): Promise<SubDivisionEntity> {
    await this.subDivisionRepository.update(id, updateSubDivisionInput)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const subDivision = await this.findOne(id)
    await this.subDivisionRepository.delete(id)
    return subDivision
  }
}