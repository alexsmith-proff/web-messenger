import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubDivisionService } from './subdivision.service';
import { CreateSubDivisionInput } from './dto/create.subdivision.input';
import { UpdateSubDivisionInput } from './dto/update.subdivision.input';

@Controller('api/subdivision')
export class SubDivisionController {
  constructor(private readonly subDivisionService: SubDivisionService) {}

  @Post('create')
  create(@Body() createSubDivisionInput: CreateSubDivisionInput) {
    return this.subDivisionService.create(createSubDivisionInput);
  }

  @Get()
  findAll() {
    return this.subDivisionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subDivisionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubDivisionInput: UpdateSubDivisionInput) {
    return this.subDivisionService.update(+id, updateSubDivisionInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subDivisionService.remove(+id);
  }
}