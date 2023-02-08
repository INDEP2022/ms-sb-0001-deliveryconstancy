import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginateQuery } from 'nestjs-paginate';
import { CommerceOfficesDetNsbddbService } from './commerce_offices_det_nsbddb.service';
import { commerceOfficesDetNsbddbDto } from './dto/commerce_offices_det_nsbddb.dto';
import { commerceOfficesDetNsbddbIdDto } from './dto/commerce_offices_det_nsbddb_id.dto';

@Controller('commerce-offices-det-nsbddb')
@ApiTags('commerce-offices-det-nsbddb')
export class CommerceOfficesDetNsbddbController {
    constructor(private readonly service: CommerceOfficesDetNsbddbService) { }

    //commerceOfficesDetNsbddb
    @ApiOperation({ summary: 'Consulta un commerce-offices-det-nsbddb' })
    @ApiResponse({
        status: 200,
        /*TODO: Cambiar DTO*/
        type: [commerceOfficesDetNsbddbDto]
    })
    @ApiQuery({
        name: "officeID",
        description: "Id del commerce-offices-det-nsbddb a buscar",
        type: Number,
        required: true
    })
    @ApiQuery({
        name: "goodNum",
        description: "Numero de bien del commerce-offices-det-nsbddb a buscar",
        type: Number,
        required: true
    })
    @ApiQuery({
        name: "programmingId",
        description: "Id de la programacion de entrega del commerce-offices-det-nsbddb a buscar",
        type: Number,
        required: true
    })
    @Get("/one")
    async commerceOfficesDetNsbddbOne(@Query() id: commerceOfficesDetNsbddbIdDto) {
        return this.service.commerceOfficesDetNsbddbOne(id);
    }


   //commerceOfficesDetNsbddb
   @ApiOperation({ summary: 'Consulta todos los commerceOfficesDetNsbddb' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [commerceOfficesDetNsbddbDto]
   })
   @ApiQuery({
       name: "page",
       description: 'Número de página',
       type: Number,
       required: false
   })
   @ApiQuery({
       name: "limit",
       description: 'Limite de elementos, si el limite es 0 traera todos los elementos',
       type: Number,
       required: false
   })
   @Get()
   async commerceOfficesDetNsbddb(@Query() query: PaginateQuery) {
       return this.service.commerceOfficesDetNsbddb(query);
   }

  

   @ApiOperation({ summary: 'Dar de alta un commerce-offices-det-nsbddb' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [commerceOfficesDetNsbddbDto]
   })
   @ApiBody({
       description: "Cuerpor de la los datos a guardar",
       type: [commerceOfficesDetNsbddbDto],
       required: true
   })
   @Post()
   async commerceOfficesDetNsbddbPost(@Body() body: commerceOfficesDetNsbddbDto) {
       return this.service.commerceOfficesDetNsbddbPost(body);
   }

   @ApiOperation({ summary: 'Actualizar un commerce-offices-det-nsbddb' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [commerceOfficesDetNsbddbDto]
   })
   @ApiBody({
       description: "Cuerpor de la los datos a actualizar, incluye ID",
       type: [commerceOfficesDetNsbddbDto],
       required: true
   })
   @ApiQuery({
    name: "officeID",
    description: "Id del commerce-offices-det-nsbddb a buscar",
    type: Number,
    required: true
})
@ApiQuery({
    name: "goodNum",
    description: "Numero de bien del commerce-offices-det-nsbddb a buscar",
    type: Number,
    required: true
})
@ApiQuery({
    name: "programmingId",
    description: "Id de la programacion de entrega del commerce-offices-det-nsbddb a buscar",
    type: Number,
    required: true
})
   @Put()
   async commerceOfficesDetNsbddbPut(@Body() body: commerceOfficesDetNsbddbDto, @Query() id: commerceOfficesDetNsbddbIdDto) {
            if(id.officeID!=body.officeID)
            return{
                statusCode: HttpStatus.BAD_REQUEST,
                message: "El certificateId en el enlace http y en el body no coincide ",
            }  
            if(id.goodNum!=body.goodNum)
            return{
                statusCode: HttpStatus.BAD_REQUEST,
                message: "El goodNum en el enlace http y en el body no coincide ",
            } 
            if(id.programmingId!=body.programmingId)
            return{
                statusCode: HttpStatus.BAD_REQUEST,
                message: "El programmingId en el enlace http y en el body no coincide ",
            } 
    return this.service.commerceOfficesDetNsbddbPut({body,id});
   }

   @ApiOperation({ summary: 'Eliminar un commerce-offices-det-nsbddb por ID' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [commerceOfficesDetNsbddbIdDto]
   })
   @ApiQuery({
    name: "officeID",
    description: "Id del commerce-offices-det-nsbddb a buscar",
    type: Number,
    required: true
})
@ApiQuery({
    name: "goodNum",
    description: "Numero de bien del commerce-offices-det-nsbddb a buscar",
    type: Number,
    required: true
})
@ApiQuery({
    name: "programmingId",
    description: "Id de la programacion de entrega del commerce-offices-det-nsbddb a buscar",
    type: Number,
    required: true
})
   @Delete()
   async commerceOfficesDetNsbddbdelete(@Query() id: commerceOfficesDetNsbddbIdDto) {
       return this.service.commerceOfficesDetNsbddbDelete(id);
   }
}
