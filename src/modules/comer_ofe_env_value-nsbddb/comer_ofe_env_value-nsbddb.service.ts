import { HttpStatus, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { ResponseDataDTO } from 'sigebi-lib-common';
import { Repository } from 'typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { comerOfiEnvValueNsbddbDto } from './dto/comer_ofi_env_value_nsbddb.dto';
import { comerOfiEnvValueNsbddbIdDto } from './dto/comer_ofi_env_value_nsbddb_id.dto';
import { comerOfiEnvValueNsbddbEntity } from './entities/comer_ofi_env_value_nsbddb.entity';

@Injectable()
export class ComerOfeEnvValueNsbddbService {
    constructor(
        @InjectRepository(comerOfiEnvValueNsbddbEntity) private repository: Repository<comerOfiEnvValueNsbddbEntity>,

        private commonFiltersService: CommonFiltersService
    ){}


    async ComerOfeEnvValueNsbddb(query: PaginateQuery): Promise<ResponseDataDTO<comerOfiEnvValueNsbddbEntity>> {
        return this.commonFiltersService.paginateFilter<comerOfiEnvValueNsbddbEntity>(query,this.repository,null,'officeID');
    }


    async ComerOfeEnvValueNsbddbOne(id: comerOfiEnvValueNsbddbIdDto) {

        let officeID=id.officeID;
        try {
            const exists = await this.repository.findOne({ where: { officeID } })
            if (!exists) return { 
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No se encontró registro para este officeID'
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
      async ComerOfeEnvValueNsbddbPost(sendItem: comerOfiEnvValueNsbddbDto) {
        let officeID=sendItem.officeID;
       
        try {

            const exists = await this.repository.findOne({ where: { officeID } })
            if(exists)
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Existe un registro con este officeID',
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
                message: error,
                }
        }
    }

     //============ PUT ============
     async ComerOfeEnvValueNsbddbPut({body,id}) {
        
        let officeID=id.officeID;
        try{
            const exists = await this.repository.findOne({ where: { officeID } })
            if(!exists)
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No existe un registro con este Id',
                count: 0,
                data:[] 
            }

            delete body.officeID;
            const data = await this.repository.update(officeID,body)

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
                message: error,
                }
        }
    }

    //============ delete ============
    async ComerOfeEnvValueNsbddbDelete(id:comerOfiEnvValueNsbddbIdDto) {
        
        let officeID=id.officeID;
        try {
            const exists = await this.repository.findOne({ where: { officeID } })
            if (!exists) return { 
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No se encontró registro para este id'
            }

            await this.repository.delete(officeID )
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
