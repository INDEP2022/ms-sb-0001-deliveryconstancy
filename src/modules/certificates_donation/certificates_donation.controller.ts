import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { certificatesDonationService } from './certificates_donation.service';
import { certificatesDonationDto } from './dto/certificates_donation.dto';
import { certificatesDonationIdDto } from './dto/certificates_donation_id.dto';

@Controller('certificates-donation')
@ApiTags('constancias_donacion')
export class CertificatesDonationController {
    constructor(private readonly service: certificatesDonationService) { }

    //certificatesDonation
    @ApiOperation({ summary: 'Consulta un certificates-donation' })
    @ApiResponse({
        status: 200,
        /*TODO: Cambiar DTO*/
        type: [certificatesDonationDto]
    })
    @ApiParam({
        name: "certificateId",
        description: "Id del certificates-donation a buscar",
        type: Number,
        required: true
    })
    @Get("/:certificateId")
    async certificatesDonationOne(@Param() id: certificatesDonationIdDto) {
        return this.service.certificatesDonationOne(id);
    }


   //certificatesDonation
   @ApiOperation({ summary: 'Consulta todos los certificatesDonation' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [certificatesDonationDto]
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
   async certificatesDonation(@Paginate() query: PaginateQuery) {
    return this.service.findAllRegisters(query);
   }

  

   @ApiOperation({ summary: 'Dar de alta un certificates-donation' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [certificatesDonationDto]
   })
   @ApiBody({
       description: "Cuerpor de la los datos a guardar",
       type: [certificatesDonationDto],
       required: true
   })
   @Post()
   async certificatesDonationPost(@Body() body: certificatesDonationDto) {
       return this.service.certificatesDonationPost(body);
   }

   @ApiOperation({ summary: 'Actualizar un certificates-donation' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [certificatesDonationDto]
   })
   @ApiBody({
       description: "Cuerpor de la los datos a actualizar, incluye ID",
       type: [certificatesDonationDto],
       required: true
   })
   @ApiParam({
    name: "certificateId",
    description: "Id del certificates-donation a buscar",
    type: Number,
    required: true
})
   @Put("/:certificateId")
   async certificatesDonationPut(@Body() body: certificatesDonationDto, @Param() id: certificatesDonationIdDto) {
    if(id.certificateId!=body.certificateId)
            return{
                statusCode: HttpStatus.BAD_REQUEST,
                message: "El certificateId en el enlace http y en el body no coincide ",
            }   
    return this.service.certificatesDonationPut({body,id});
   }

   @ApiOperation({ summary: 'Eliminar un certificates-donation por ID' })
   @ApiResponse({
       status: 200,
       /*TODO: Cambiar DTO*/
       type: [certificatesDonationIdDto]
   })
   @ApiParam({
       name: "certificateId",
       description: "Id del certificates-donation a elimiar",
       type: Number,
       required: true
   })
   @Delete("/:certificateId")
   async certificatesDonationdelete(@Param() id: certificatesDonationIdDto) {
       return this.service.certificatesDonationDelete(id);
   }

}
