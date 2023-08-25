import { HttpStatus, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { certificatesDeliveryDto } from './dto/certificates_delivery.dto';
import { certificatesDeliveryIdDto } from './dto/certificates_delivery_Id.dto';
import { certificatesDeliveryEntity } from './entities/certificates_delivery.entity';
import * as moment from 'moment-timezone';

@Injectable()
export class certificatesDeliveryService {

    constructor(
        @InjectRepository(certificatesDeliveryEntity) private repository: Repository<certificatesDeliveryEntity>,

        private commonFiltersService: CommonFiltersService
    ) { }


    async certificatesDelivery(query: PaginateQuery) {
        const queryBuilder = this.repository.createQueryBuilder('table');
        // queryBuilder.leftJoinAndMapOne('table.request', RequestsXInsuranceEntity, 'tbl', 'table.no_solicitud = tbl.no_solicitud');
        return await this.commonFiltersService.paginateFilter<certificatesDeliveryEntity>(
            query,
            this.repository,
            queryBuilder,
            'certificateId',
        );
    }
    async certificatesDeliveryOne(id: certificatesDeliveryIdDto) {

        let certificateId = id.certificateId;
        try {
            const exists = await this.repository.findOne({ where: { certificateId } })
            if (!exists) return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No se encontró registro para este certificateId'
            }

            return {
                statusCode: HttpStatus.OK,
                message: "Registro encontrado exitosamente",
                data: exists,
                count: 1
            }

        }
        catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error,
            }
        }

    }

    //============ POST ============
    async certificatesDeliveryPost(sendItem, authUser) {
        let certificateId = sendItem.certificateId;

        sendItem.creationDate = moment.utc(new Date()).tz('America/Mexico_City').format('YYYY-MM-DD HH:mm:ss')
        sendItem.userModification = authUser.name
        sendItem.userCreation = authUser.name
        sendItem.modificationDate = moment.utc(new Date()).tz('America/Mexico_City').format('YYYY-MM-DD HH:mm:ss')

        try {

            const exists = await this.repository.findOne({ where: { certificateId } })
            if (exists)
                return {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Existe un registro con este certificateId',
                    count: 0,
                    data: []
                }
            const data = await this.repository.save(sendItem)
            return {
                statusCode: HttpStatus.OK,
                message: 'Registro guardado correctamente.',
                count: 1,
                data: data
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Ocurrio un error al intentar obtener los datos.",
            }
        }
    }

    //============ PUT ============
    async certificatesDeliveryPut({ body, id, authUser }) {

        delete body.creationDate
        delete body.userCreation
        body.userModification = authUser.name
        body.modificationDate = moment.utc(new Date()).tz('America/Mexico_City').format('YYYY-MM-DD HH:mm:ss')
        let certificateId = id.certificateId;
        try {
            const exists = await this.repository.findOne({ where: { certificateId } })
            if (!exists)
                return {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'No existe un registro con este Id',
                    count: 0,
                    data: []
                }

            delete body.certificateId;
            const data = await this.repository.update(certificateId, body)

            if (data)
                return {
                    statusCode: HttpStatus.OK,
                    message: 'Registro actualizado correctamente.',
                }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No se guardo el registro',
            }

        }
        catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Ocurrio un error al intentar obtener los datos.",
            }
        }
    }

    //============ delete ============
    async certificatesDeliveryDelete(id: certificatesDeliveryIdDto) {

        let certificateId = id.certificateId;
        try {
            const exists = await this.repository.findOne({ where: { certificateId } })
            if (!exists) return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No se encontró registro para este id'
            }

            await this.repository.delete(certificateId)
            return {
                statusCode: HttpStatus.OK,
                message: 'Registro eliminado correctamente.',
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Ocurrio un error al intentar obtener los datos.",
            }
        }
    }
}
