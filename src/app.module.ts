import { DeliveryconstancyModule } from './modules/deliveryconstancy.module';


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';
import { configService } from 'sigebi-lib-common';
import { ConfigModule } from '@nestjs/config';


@Module({
      imports: [
            DeliveryconstancyModule,
            ConfigModule.forRoot({
                  envFilePath: ['.env'],
                  isGlobal: true,
            }),
            TypeOrmModule.forRoot(
                  configService.getTypeOrmConfig()),
            WinstonModule.forRoot({
                  level: 'debug',
                  format: winston.format.combine(
                        winston.format.timestamp({
                              format: 'YYYY-MM-DD HH:mm:ss',
                        }),
                        winston.format.errors({ stack: true }),
                        winston.format.splat(),
                        winston.format.json(),
                  ),
                  transports: [
                        new winston.transports.File({
                              dirname: path.join(__dirname, './../log/debug/'),
                              filename: 'debug.log',
                              level: 'debug',
                        }),
                        new winston.transports.File({
                              dirname: path.join(__dirname, './../log/error/'),
                              filename: 'error.log',
                              level: 'error',
                        }),
                        new winston.transports.File({
                              dirname: path.join(__dirname, './../log/info/'),
                              filename: 'info.log',
                              level: 'info',
                        }),
                        new winston.transports.Console({ level: 'debug' }),
                  ],
            }),


      ],
      providers: [],
      controllers: [],


})
export class AppModule { }
