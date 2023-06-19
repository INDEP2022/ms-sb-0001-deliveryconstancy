/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { Repository } from 'typeorm';
import { DevolutionConstancyViewEntity } from '../entities/devolution-constancy-view.entity';
import { ResponseDataDTO } from 'src/core/interfaces/response.data.dto';


@Injectable()
export class ViewsService {

      constructor(@InjectRepository(DevolutionConstancyViewEntity)
      private repository: Repository<DevolutionConstancyViewEntity>,

            private commonFilterService: CommonFilterService,
      ) { }





      async findDevolutionConstancyRegisters(query: PaginateQuery): Promise<ResponseDataDTO<DevolutionConstancyViewEntity> | any> {
            return this.commonFilterService.paginateFilter<DevolutionConstancyViewEntity>(query, this.repository, null, "certificateId");
      }




}
