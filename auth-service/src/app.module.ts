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
import { SettingsEntity } from './settings/entities/settings.entity';
import { RoomModule } from './room/room.module';
import { JobTitleModule } from './jobtitle/jobtitle.module';
import { SubDivisionModule } from './subdivision/subdivision.module';
import { SettingsModule } from './settings/settings.module';
import { AuthModule } from './auth/auth.module';

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
          SettingsEntity,
        ],
        synchronize: true,
      })
    }),
    UserModule,
    AuthModule,
    RoomModule,
    JobTitleModule,
    SubDivisionModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
