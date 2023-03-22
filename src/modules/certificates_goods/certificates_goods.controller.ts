import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { CertificatesGoodsService } from './certificates_goods.service';
import { certificatesGoodsDto } from './dto/certificates_goods.dto';
import { certificatesGoodsIdDto } from './dto/certificates_goods_id.dto';

@Controller('certificates-goods')
@ApiTags('constancia_bienes')
export class CertificatesGoodsController {
    constructor(private readonly service: CertificatesGoodsService) { }

    //certificatesGoods
    @ApiOperation({ summary: 'Consulta un certificates-Goods' })
    @ApiResponse({
        status: 200,
        /*TODO: Cambiar DTO*/
        type: [certificatesGoodsDto]
    })
    @ApiQuery({
        name: "certificateId",
        description: "Id del certificates-Goods a buscar",
        type: Number,
        required: true
    })
    @ApiQuery({
        name: "goodsDeliveryScheduleId",
        description: "Id de la programacion de entrega del certificates-Goods a buscar",
        type: Number,
        required: true
    })
    @Get("/one")
    async certificatesGoodsOne(@Query() id: certificatesGoodsIdDto) {
        return this.service.certificatesGoodsOne(id);
    }


   //certificatesGoods
   @ApiOperation({ summary: 'Consulta todos los certificatesGoods' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [certificatesGoodsDto]
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
   async certificatesGoods(@Paginate() query: PaginateQuery) {
       return this.service.findAllRegisters(query);
   }

  

   @ApiOperation({ summary: 'Dar de alta un certificates-Goods' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [certificatesGoodsDto]
   })
   @ApiBody({
       description: "Cuerpor de la los datos a guardar",
       type: [certificatesGoodsDto],
       required: true
   })
   @Post()
   async certificatesGoodsPost(@Body() body: certificatesGoodsDto) {
       return this.service.certificatesGoodsPost(body);
   }

   @ApiOperation({ summary: 'Actualizar un certificates-Goods' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [certificatesGoodsDto]
   })
   @ApiBody({
       description: "Cuerpor de la los datos a actualizar, incluye ID",
       type: [certificatesGoodsDto],
       required: true
   })
   @ApiQuery({
    name: "certificateId",
    description: "Id del certificates-Goods a buscar",
    type: Number,
    required: true
   })
    @ApiQuery({
    name: "goodsDeliveryScheduleId",
    description: "Id de la programacion de entrega del certificates-Goods a buscar",
    type: Number,
    required: true
    })
   @Put()
   async certificatesGoodsPut(@Body() body: certificatesGoodsDto, @Query() id: certificatesGoodsIdDto) {
            if(id.certificateId!=body.certificateId)
            return{
                statusCode: HttpStatus.BAD_REQUEST,
                message: "El certificateId en el enlace http y en el body no coincide ",
            }  
            if(id.goodsDeliveryScheduleId!=body.goodsDeliveryScheduleId)
            return{
                statusCode: HttpStatus.BAD_REQUEST,
                message: "El goodsDeliveryScheduleId en el enlace http y en el body no coincide ",
            } 
    return this.service.certificatesGoodsPut({body,id});
   }

   @ApiOperation({ summary: 'Eliminar un certificates-Goods por ID' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [certificatesGoodsIdDto]
   })
   @ApiQuery({
    name: "certificateId",
    description: "Id del certificates-Goods a buscar",
    type: Number,
    required: true
    })
    @ApiQuery({
        name: "goodsDeliveryScheduleId",
        description: "Id de la programacion de entrega del certificates-Goods a buscar",
        type: Number,
        required: true
    })
   @Delete()
   async certificatesGoodsdelete(@Query() id: certificatesGoodsIdDto) {
       return this.service.certificatesGoodsDelete(id);
   }


}
