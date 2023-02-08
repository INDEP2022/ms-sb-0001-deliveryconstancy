import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { CertificatesDonationController } from './certificates_donation.controller';
import { certificatesDonationService } from './certificates_donation.service';
import { certificatesDonationEntity } from './entities/certificates_donation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature( [
      certificatesDonationEntity 
    ])
  ],
  controllers: [CertificatesDonationController],
  providers: [certificatesDonationService, CommonFiltersService]
})
export class CertificatesDonationModule {}
