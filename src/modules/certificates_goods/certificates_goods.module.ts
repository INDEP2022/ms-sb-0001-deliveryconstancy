import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { CertificatesGoodsController } from './certificates_goods.controller';
import { CertificatesGoodsService } from './certificates_goods.service';
import { certificatesGoodsEntity } from './entities/certificates_goods.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature( [
      certificatesGoodsEntity 
    ])
  ],
  controllers: [CertificatesGoodsController],
  providers: [CertificatesGoodsService, CommonFiltersService]
})
export class CertificatesGoodsModule {}
