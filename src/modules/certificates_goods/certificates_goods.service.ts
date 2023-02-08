import { HttpStatus, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { ResponseDataDTO } from 'sigebi-lib-common';
import { Repository } from 'typeorm';
import { CommonFiltersService } from '../commonFiltersService/common-filters.service';
import { certificatesGoodsDto } from './dto/certificates_goods.dto';
import { certificatesGoodsIdDto } from './dto/certificates_goods_id.dto';
import { certificatesGoodsEntity } from './entities/certificates_goods.entity';

@Injectable()
export class CertificatesGoodsService {
    constructor(
        @InjectRepository(certificatesGoodsEntity) private repository: Repository<certificatesGoodsEntity>,

        private commonFiltersService: CommonFiltersService
    ){}


    async certificatesGoods(query: PaginateQuery): Promise<ResponseDataDTO<certificatesGoodsEntity>> {
        return this.commonFiltersService.paginateFilter<certificatesGoodsEntity>(query,this.repository,null,'certificateId');
    }


    async certificatesGoodsOne(id: certificatesGoodsIdDto) {

        let certificateId=id.certificateId;
        let goodsDeliveryScheduleId=id.goodsDeliveryScheduleId;
        try {
            const exists = await this.repository.findOne({ where: {certificateId,goodsDeliveryScheduleId} })
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
      async certificatesGoodsPost(sendItem: certificatesGoodsDto) {
        let certificateId=sendItem.certificateId;
        let goodsDeliveryScheduleId=sendItem.goodsDeliveryScheduleId;
       
        try {

            const exists = await this.repository.findOne({ where: {certificateId,goodsDeliveryScheduleId} })
            if(exists)
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Existe un registro con este certificateId y goodsDeliveryScheduleId',
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
     async certificatesGoodsPut({body,id}) {
        
        let certificateId=id.certificateId;
        let goodsDeliveryScheduleId=id.goodsDeliveryScheduleId;
        try{
            const exists = await this.repository.findOne({ where: {certificateId,goodsDeliveryScheduleId} })
            if(!exists)
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No existe un registro con este Id',
                count: 0,
                data:[] 
            }

            delete body.certificateId;
            delete body.goodsDeliveryScheduleId;
            const data = await this.repository.update({certificateId,goodsDeliveryScheduleId},body)

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
    async certificatesGoodsDelete(id:certificatesGoodsIdDto) {
        
        let certificateId=id.certificateId;
        let goodsDeliveryScheduleId=id.goodsDeliveryScheduleId;
        try {
            const exists = await this.repository.findOne({ where: {certificateId,goodsDeliveryScheduleId}})
            if (!exists) return { 
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'No se encontró registro para este id'
            }

            await this.repository.delete({certificateId,goodsDeliveryScheduleId} )
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
