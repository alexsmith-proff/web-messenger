import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get<string>('TYPEORM_HOST'),
    //     port: configService.get<number>('TYPEORM_PORT'),
    //     username: configService.get<string>('TYPEORM_USERNAME'),
    //     password: configService.get<string>('TYPEORM_PASSWORD'),
    //     database: configService.get<string>('TYPEORM_DATABASE'),
    //     entities: [
    //     ],
    //     synchronize: true,
    //   })
    // }),
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }