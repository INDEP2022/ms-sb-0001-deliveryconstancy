import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginateQuery } from 'nestjs-paginate';
import { ComerOfeEnvValueNsbddbService } from './comer_ofe_env_value-nsbddb.service';
import { comerOfiEnvValueNsbddbDto } from './dto/comer_ofi_env_value_nsbddb.dto';
import { comerOfiEnvValueNsbddbIdDto } from './dto/comer_ofi_env_value_nsbddb_id.dto';

@Controller('comer-ofe-env-value-nsbddb')
@ApiTags('comer-ofe-env-value-nsbddb')
export class ComerOfeEnvValueNsbddbController {

    constructor(private readonly service: ComerOfeEnvValueNsbddbService) { }

    //comerOfiEnvValueNsbddb
    @ApiOperation({ summary: 'Consulta un comer_ofi_env_avaluos_nsbddb' })
    @ApiResponse({
        status: 200,
        /*TODO: Cambiar DTO*/
        type: [comerOfiEnvValueNsbddbDto]
    })
    @ApiParam({
        name: "officeID",
        description: "Id del comer_ofi_env_avaluos_nsbddb a buscar",
        type: Number,
        required: true
    })
    @Get("/:officeID")
    async ComerOfeEnvValueNsbddbOne(@Param() id: comerOfiEnvValueNsbddbIdDto) {
        return this.service.ComerOfeEnvValueNsbddbOne(id);
    }


   //comerOfiEnvValueNsbddb
   @ApiOperation({ summary: 'Consulta todos los comerOfiEnvValueNsbddb' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [comerOfiEnvValueNsbddbDto]
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
   async ComerOfeEnvValueNsbddb(@Query() query: PaginateQuery) {
       return this.service.ComerOfeEnvValueNsbddb(query);
   }

  

   @ApiOperation({ summary: 'Dar de alta un comer_ofi_env_avaluos_nsbddb' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [comerOfiEnvValueNsbddbDto]
   })
   @ApiBody({
       description: "Cuerpor de la los datos a guardar",
       type: [comerOfiEnvValueNsbddbDto],
       required: true
   })
   @Post()
   async ComerOfeEnvValueNsbddbPost(@Body() body: comerOfiEnvValueNsbddbDto) {
       return this.service.ComerOfeEnvValueNsbddbPost(body);
   }

   @ApiOperation({ summary: 'Actualizar un comer_ofi_env_avaluos_nsbddb' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [comerOfiEnvValueNsbddbDto]
   })
   @ApiBody({
       description: "Cuerpor de la los datos a actualizar, incluye ID",
       type: [comerOfiEnvValueNsbddbDto],
       required: true
   })
   @Put("/:officeID")
   async ComerOfeEnvValueNsbddbPut(@Body() body: comerOfiEnvValueNsbddbDto, @Param() id: comerOfiEnvValueNsbddbIdDto) {
       return this.service.ComerOfeEnvValueNsbddbPut({body,id});
   }

   @ApiOperation({ summary: 'Eliminar un comer_ofi_env_avaluos_nsbddb por ID' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [comerOfiEnvValueNsbddbIdDto]
   })
   @ApiParam({
       name: "officeID",
       description: "Id del comer_ofi_env_avaluos_nsbddb a elimiar",
       type: Number,
       required: true
   })
   @Delete("/:officeID")
   async ComerOfeEnvValueNsbddbdelete(@Param() id: comerOfiEnvValueNsbddbIdDto) {
       return this.service.ComerOfeEnvValueNsbddbDelete(id);
   }

    

   

}
