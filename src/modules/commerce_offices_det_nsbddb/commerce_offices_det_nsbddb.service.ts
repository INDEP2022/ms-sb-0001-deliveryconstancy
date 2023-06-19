import { HttpStatus, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { commerceOfficesDetNsbddbDto } from './dto/commerce_offices_det_nsbddb.dto';
import { commerceOfficesDetNsbddbIdDto } from './dto/commerce_offices_det_nsbddb_id.dto';
import { commerceOfficesDetNsbddbEntity } from './entities/commerce_offices_det_nsbddb.entity';
import { ResponseDataDTO } from 'src/core/interfaces/response.data.dto';
@Injectable()
export class CommerceOfficesDetNsbddbService {
    constructor(
        @InjectRepository(commerceOfficesDetNsbddbEntity) private repository: Repository<commerceOfficesDetNsbddbEntity>,

        private commonFiltersService: CommonFiltersService
    ){}


    async commerceOfficesDetNsbddb(query: PaginateQuery): Promise<ResponseDataDTO<commerceOfficesDetNsbddbEntity>> {
        return this.commonFiltersService.paginateFilter<commerceOfficesDetNsbddbEntity>(query,this.repository,null,'officeID');
    }


    async commerceOfficesDetNsbddbOne(id: commerceOfficesDetNsbddbIdDto) {

        let officeID=id.officeID;
        let goodNum=id.goodNum;
        let programmingId=id.programmingId;
        try {
            const exists = await this.repository.findOne({ where: { officeID,goodNum,programmingId } })
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
      async commerceOfficesDetNsbddbPost(sendItem: commerceOfficesDetNsbddbDto) {
        let officeID=sendItem.officeID;
        let goodNum=sendItem.goodNum;
        let programmingId=sendItem.programmingId;
        try {

            const exists = await this.repository.findOne({ where: { officeID,goodNum,programmingId } })
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
     async commerceOfficesDetNsbddbPut({body,id}) {
        
        let officeID=id.officeID;
        let goodNum=id.goodNum;
        let programmingId=id.programmingId;
        try{
            const exists = await this.repository.findOne({ where: { officeID,goodNum,programmingId } })
            if(!exists)
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No existe un registro con este Id',
                count: 0,
                data:[] 
            }

            delete body.officeID;
            delete body.goodNum;
            delete body.programmingId;
            const data = await this.repository.update( { officeID,goodNum,programmingId },body)

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
    async commerceOfficesDetNsbddbDelete(id:commerceOfficesDetNsbddbIdDto) {
        
        let officeID=id.officeID;
        let goodNum=id.goodNum;
        let programmingId=id.programmingId;
        try {
            const exists = await this.repository.findOne({ where: { officeID,goodNum,programmingId } })
            if (!exists) return { 
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No se encontró registro para este id'
            }

            await this.repository.delete({ officeID,goodNum,programmingId } )
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
