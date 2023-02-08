import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { CertificatesDeliveryController } from './certificates_delivery.controller';
import { certificatesDeliveryService } from './certificates_delivery.service';
import { certificatesDeliveryEntity } from './entities/certificates_delivery.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature( [
      certificatesDeliveryEntity
    ])
  ],
  controllers: [CertificatesDeliveryController],
  providers: [certificatesDeliveryService, CommonFiltersService]
})
export class CertificatesDeliveryModule {}
