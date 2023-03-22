import { HttpStatus, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { CRUDMessages, ResponseDataDTO } from 'sigebi-lib-common';
import { Repository } from 'typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { certificatesDonationDto } from './dto/certificates_donation.dto';
import { certificatesDonationIdDto } from './dto/certificates_donation_id.dto';
import { certificatesDonationEntity } from './entities/certificates_donation.entity';


@Injectable()
export class certificatesDonationService {
    constructor(
        @InjectRepository(certificatesDonationEntity) private repository: Repository<certificatesDonationEntity>,

        private commonFiltersService: CommonFiltersService
    ){}


    async findAllRegisters(query: PaginateQuery) {
        const queryBuilder = this.repository.createQueryBuilder('table');
      // queryBuilder.leftJoinAndMapOne('table.request', RequestsXInsuranceEntity, 'tbl', 'table.no_solicitud = tbl.no_solicitud');
        return await this.commonFiltersService.paginateFilter<certificatesDonationEntity>(
            query,
            this.repository,
            queryBuilder,
            'certificateId',
        );
    }


    async certificatesDonationOne(id: certificatesDonationIdDto) {

        let certificateId=id.certificateId;
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

    async findOneRegisterById(id:number) {
        const value = await this.repository.findOne({ where: {certificateId:id}});
        return value
            ? {
                statusCode: HttpStatus.OK,
                message: [CRUDMessages.GetSuccess],
                data: value,
                count: 1,
            }
            : {
                statusCode: HttpStatus.BAD_REQUEST,
                message: [CRUDMessages.GetNotfound],
                data: [],
                count: 0,
            };
    }

    async certificatesDonationPost(dto: certificatesDonationDto) {
        try {
            const exist=  await  this.findOneRegisterById(dto.certificateId)
            if (exist.count>0) {
               return {
                   statusCode: HttpStatus.BAD_REQUEST,
                   message: ["Ya existe registro"],
               }
            }
               const creation = await this.repository.save(dto);
               return {
                   statusCode: HttpStatus.OK,
                   message: [CRUDMessages.CreateSuccess],
                   data: creation,
               }
           } catch (error) {
               return {
                   statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                   message: [error.message]
               }
           }
    }
     //============ PUT ============
     async certificatesDonationPut({body,id}) {
        
        let certificateId=id.certificateId;
        try{
            const exists = await this.repository.findOne({ where: { certificateId } })
            if(!exists)
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No existe un registro con este Id',
                count: 0,
                data:[] 
            }

            delete body.certificateId;
            const data = await this.repository.update(certificateId,body)

            if(data)
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
            return  { 
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Ocurrio un error al intentar obtener los datos.",
                }
        }
    }

    //============ delete ============
    async certificatesDonationDelete(id:certificatesDonationIdDto) {
        
        let certificateId=id.certificateId;
        try {
            const exists = await this.repository.findOne({ where: { certificateId } })
            if (!exists) return { 
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No se encontró registro para este id'
            }

            await this.repository.delete(certificateId )
            return { 
                statusCode: HttpStatus.OK,
                message: 'Registro eliminado correctamente.',
                }
        } catch (error) {
            return  { 
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Ocurrio un error al intentar obtener los datos.",
                }
        }
    }
}