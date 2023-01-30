/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { DevolutionConstancyViewEntity } from '../entities/devolution-constancy-view.entity';
import { ViewsService } from '../services/views.service';

@ApiCreatedResponse()
@ApiTags('find views pag')
@Controller('views')

export class ViewsController {
      constructor(private readonly aclarationService: ViewsService) { }

      @ApiOperation({ summary: 'Paginación de todos los registros' })
      @ApiResponse({
            status: 200,
            type: [DevolutionConstancyViewEntity]
      })
      @ApiQuery({
            name: "page",
            description: 'Número de página',
            type: Number,
            required: false
      })
      @ApiQuery({
            name: "limit",
            description: 'Limite de elementos',
            type: Number,
            required: false
      })
      @ApiQuery({
            name: "search",
            description: 'Texto a buscar',
            type: String,
            required: false
      })
      @Get("devolution-constancy-view")
      async AclarationViewRegisters(@Paginate() query: PaginateQuery) {
            return await this.aclarationService.findDevolutionConstancyRegisters(query);
      }


}
