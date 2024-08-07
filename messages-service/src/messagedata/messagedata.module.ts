import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageDataEntity } from './entities/messagedata.entity';
import { MessageDataController } from './messagedata.controller';
import { MessageDataService } from './messagedata.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MessageDataEntity])
  ],
  controllers: [MessageDataController],
  providers: [MessageDataService]
})
export class MessageDataModule {}