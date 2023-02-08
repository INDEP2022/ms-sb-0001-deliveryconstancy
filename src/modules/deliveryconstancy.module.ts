/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ComerOfeEnvValueNsbddbModule } from './comer_ofe_env_value-nsbddb/comer_ofe_env_value-nsbddb.module';
import { ViewsModule } from './views/views.module';

@Module({
      imports: [ViewsModule,ComerOfeEnvValueNsbddbModule],

})
export class DeliveryconstancyModule { }
