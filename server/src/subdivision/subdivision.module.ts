import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubDivisionEntity } from './entities/subdivision.entity';
import { SubDivisionController } from './subdivision.controller';
import { SubDivisionService } from './subdivision.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubDivisionEntity])
  ],
  controllers: [SubDivisionController],
  providers: [SubDivisionService]
})
export class SubDivisionModule {}