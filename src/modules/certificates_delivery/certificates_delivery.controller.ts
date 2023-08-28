
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { certificatesDeliveryService } from './certificates_delivery.service';
import { certificatesDeliveryDto } from './dto/certificates_delivery.dto';
import { certificatesDeliveryIdDto } from './dto/certificates_delivery_Id.dto';
import { IJWTPayload } from 'src/shared/auth/interfaces/jwt-payload.interface';
import { GetAuthUser } from 'src/shared/auth/decorator/get-auth-user.decorator';

@Controller('certificates-delivery')
@ApiTags('constancias_entrega')
export class CertificatesDeliveryController {
    constructor(private readonly service: certificatesDeliveryService) { }

    //certificatesDelivery
    @ApiOperation({ summary: 'Consulta un certificates-delivery' })
    @ApiResponse({
        status: 200,
        /*TODO: Cambiar DTO*/
        type: [certificatesDeliveryDto]
    })
    @ApiParam({
        name: "certificateId",
        description: "Id del certificates-delivery a buscar",
        type: Number,
        required: true
    })
    @Get("/:certificateId")
    async certificatesDeliveryOne(@Param() id: certificatesDeliveryIdDto) {
        return this.service.certificatesDeliveryOne(id);
    }


    //certificatesDelivery
    @ApiOperation({ summary: 'Consulta todos los certificatesDelivery' })
    @ApiResponse({
        status: 200,
        /*TODO: Cambiar DTO*/
        type: [certificatesDeliveryDto]
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
    async certificatesDelivery(@Paginate() query: PaginateQuery) {
        return this.service.certificatesDelivery(query);
    }



    @ApiOperation({ summary: 'Dar de alta un certificates-delivery' })
    @ApiResponse({
        status: 200,
        /*TODO: Cambiar DTO*/
        type: [certificatesDeliveryDto]
    })
    @ApiBody({
        description: "Cuerpor de la los datos a guardar",
        type: [certificatesDeliveryDto],
        required: true
    })
    @Post()
    async certificatesDeliveryPost(@Body() body: certificatesDeliveryDto, @GetAuthUser() authUser: IJWTPayload) {
        return this.service.certificatesDeliveryPost(body, authUser);
    }

    @ApiOperation({ summary: 'Actualizar un certificates-delivery' })
    @ApiResponse({
        status: 200,
        /*TODO: Cambiar DTO*/
        type: [certificatesDeliveryDto]
    })
    @ApiBody({
        description: "Cuerpor de la los datos a actualizar, incluye ID",
        type: [certificatesDeliveryDto],
        required: true
    })
    @ApiParam({
        name: "certificateId",
        description: "Id del certificates-delivery a buscar",
        type: Number,
        required: true
    })
    @Put("/:certificateId")
    async certificatesDeliveryPut(@Body() body: certificatesDeliveryDto, @Param() id: certificatesDeliveryIdDto, @GetAuthUser() authUser: IJWTPayload) {
        body.certificateId = id .certificateId
        return this.service.certificatesDeliveryPut({ body, authUser });
    }

    @ApiOperation({ summary: 'Eliminar un certificates-delivery por ID' })
    @ApiResponse({
        status: 200,
        /*TODO: Cambiar DTO*/
        type: [certificatesDeliveryIdDto]
    })
    @ApiParam({
        name: "certificateId",
        description: "Id del certificates-delivery a elimiar",
        type: Number,
        required: true
    })
    @Delete("/:certificateId")
    async certificatesDeliverydelete(@Param() id: certificatesDeliveryIdDto) {
        return this.service.certificatesDeliveryDelete(id);
    }

}
