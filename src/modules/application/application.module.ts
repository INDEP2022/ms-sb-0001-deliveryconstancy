import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService,
    {
      provide: 'ms-sb-0001-donationgood',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('DONATIONGOOD_HOST_NAME'),
            port: configService.get('DONATIONGOOD_HOST_PORT'),
          },
        }),
    }]
})
export class ApplicationModule { }
