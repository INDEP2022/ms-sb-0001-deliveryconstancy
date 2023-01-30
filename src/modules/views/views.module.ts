import { ViewsService } from './services/views.service';
import { ViewsController } from './controller/views.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevolutionConstancyViewEntity } from './entities/devolution-constancy-view.entity';

@Module({
      imports: [TypeOrmModule.forFeature([DevolutionConstancyViewEntity])],
      controllers: [
            ViewsController,],
      providers: [
            ViewsService, CommonFilterService],
})
export class ViewsModule { }
