import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomInput } from './dto/create.room.input';
import { UpdateRoomInput } from './dto/update.room.input';

@Controller('api/room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('create')
  create(@Body() createRoomInput: CreateRoomInput) {
    return this.roomService.create(createRoomInput);
  }

  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomInput: UpdateRoomInput) {
    return this.roomService.update(+id, updateRoomInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
}