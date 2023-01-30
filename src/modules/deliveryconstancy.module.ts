/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ViewsModule } from './views/views.module';

@Module({
      imports: [ViewsModule],

})
export class DeliveryconstancyModule { }
