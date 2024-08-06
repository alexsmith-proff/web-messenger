import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingsInput } from './dto/create.settings.input';
import { UpdateSettingsInput } from './dto/update.settings.input';

@Controller('api/settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post('create')
  create(@Body() createSettingsInput: CreateSettingsInput) {
    return this.settingsService.create(createSettingsInput);
  }

  @Get()
  findAll() {
    return this.settingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.settingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSettingsInput: UpdateSettingsInput) {
    return this.settingsService.update(+id, updateSettingsInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.settingsService.remove(+id);
  }
}