import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SettingsEntity } from './entities/settings.entity';
import { CreateSettingsInput } from './dto/create.settings.input';
import { UpdateSettingsInput } from './dto/update.settings.input';

let getSlug = require('speakingurl')

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(SettingsEntity)
    private readonly settingsRepository: Repository<SettingsEntity>
  ){}

  async create(createSettingsInput: CreateSettingsInput): Promise<SettingsEntity> {
    return await this.settingsRepository.save({
      ...createSettingsInput,
      slug: createSettingsInput.slug === '' ? getSlug(createSettingsInput.name) : createSettingsInput.slug
    })
  }

  async findAll(): Promise<SettingsEntity[]> {
    return await this.settingsRepository.find()
  }

  async findOne(id: number): Promise<SettingsEntity> {
    return await this.settingsRepository.findOne({ where: {id}});
  }

  async update(id: number, updateSettingsInput: UpdateSettingsInput): Promise<SettingsEntity> {
    console.log(updateSettingsInput);
    
    await this.settingsRepository.update(id, updateSettingsInput)
    return await this.findOne(id)
  }

  async remove(id: number) {
    const settings = await this.findOne(id)
    await this.settingsRepository.delete(id)
    return settings
  }
}