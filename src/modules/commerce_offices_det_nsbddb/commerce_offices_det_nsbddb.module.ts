import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { CommerceOfficesDetNsbddbController } from './commerce_offices_det_nsbddb.controller';
import { CommerceOfficesDetNsbddbService } from './commerce_offices_det_nsbddb.service';
import { commerceOfficesDetNsbddbEntity } from './entities/commerce_offices_det_nsbddb.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature( [
      commerceOfficesDetNsbddbEntity 
    ])
  ],
  controllers: [CommerceOfficesDetNsbddbController],
  providers: [CommerceOfficesDetNsbddbService, CommonFiltersService]
})
export class CommerceOfficesDetNsbddbModule {}
