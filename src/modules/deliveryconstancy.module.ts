/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ComerOfeEnvValueNsbddbModule } from './comer_ofe_env_value-nsbddb/comer_ofe_env_value-nsbddb.module';
import { ViewsModule } from './views/views.module';
import { CertificatesDonationModule } from './certificates_donation/certificates_donation.module';
import { CertificatesGoodsModule } from './certificates_goods/certificates_goods.module';
import { CommerceOfficesDetNsbddbModule } from './commerce_offices_det_nsbddb/commerce_offices_det_nsbddb.module';
import { CertificatesDeliveryModule } from './certificates_delivery/certificates_delivery.module';

@Module({
      imports: [ViewsModule,ComerOfeEnvValueNsbddbModule, CertificatesDonationModule, CertificatesGoodsModule, CommerceOfficesDetNsbddbModule, CertificatesDeliveryModule],

})
export class DeliveryconstancyModule { }
