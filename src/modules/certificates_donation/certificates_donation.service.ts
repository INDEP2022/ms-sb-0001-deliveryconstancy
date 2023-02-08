import { HttpStatus, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { ResponseDataDTO } from 'sigebi-lib-common';
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


    async certificatesDonation(query: PaginateQuery): Promise<ResponseDataDTO<certificatesDonationEntity>> {
        return this.commonFiltersService.paginateFilter<certificatesDonationEntity>(query,this.repository,null,'certificateId');
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

      //============ POST ============
      async certificatesDonationPost(sendItem: certificatesDonationDto) {
        let certificateId=sendItem.certificateId;
       
        try {

            const exists = await this.repository.findOne({ where: { certificateId } })
            if(exists)
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Existe un registro con este certificateId',
                count: 0,
                data:[] 
            }
            const data = await this.repository.save(sendItem)
            return {
                statusCode: HttpStatus.OK,
                message: 'Registro guardado correctamente.',
                count: 1,
                data:data  
            }
        } catch (error) {
            return  { 
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Ocurrio un error al intentar obtener los datos.",
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