import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubDivisionEntity } from './entities/subdivision.entity';
import { SubDivisionService } from './subdivision.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubDivisionEntity])],
  providers: [SubDivisionService]
})
export class SubDivisionModule {}