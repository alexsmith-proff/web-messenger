import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { SubDivisionEntity } from './subdivision/entities/subdivision.entity';
import { JobTitleEntity } from './jobtitle/entity/jobtitle.entity';
import { RoomEntity } from './room/entities/room.entity';
import { RoomModule } from './room/room.module';
import { JobTitleModule } from './jobtitle/jobtitle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('TYPEORM_HOST'),
        port: configService.get<number>('TYPEORM_PORT'),
        username: configService.get<string>('TYPEORM_USERNAME'),
        password: configService.get<string>('TYPEORM_PASSWORD'),
        database: configService.get<string>('TYPEORM_DATABASE'),
        entities: [
          UserEntity,
          JobTitleEntity,
          SubDivisionEntity,
          RoomEntity,
        ],
        synchronize: true,
      })
    }),
    UserModule,
    RoomModule,
    JobTitleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
