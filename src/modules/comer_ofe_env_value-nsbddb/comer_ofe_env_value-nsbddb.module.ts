import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { ComerOfeEnvValueNsbddbController } from './comer_ofe_env_value-nsbddb.controller';
import { ComerOfeEnvValueNsbddbService } from './comer_ofe_env_value-nsbddb.service';
import { comerOfiEnvValueNsbddbEntity } from './entities/comer_ofi_env_value_nsbddb.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature( [
      comerOfiEnvValueNsbddbEntity
    ])
  ],
  controllers: [ComerOfeEnvValueNsbddbController],
  providers: [ComerOfeEnvValueNsbddbService,
    CommonFiltersService]
})
export class ComerOfeEnvValueNsbddbModule {}
