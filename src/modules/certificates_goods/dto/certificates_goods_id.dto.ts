import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNumber, IsNumberString, IsOptional, IsString, Max, Min } from "class-validator";

export class certificatesGoodsIdDto { 

 
@IsInt({ message: "certificateId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de certificateId debe ser 0" })
//@Max(0, { message: "El maximo valor de certificateId debe ser 0" })
@ApiProperty({ example: "certificateId" })
certificateId: number;

@IsInt({ message: "goodsDeliveryScheduleId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de goodsDeliveryScheduleId debe ser 0" })
//@Max(0, { message: "El maximo valor de goodsDeliveryScheduleId debe ser 0" })
@ApiProperty({ example: "goodsDeliveryScheduleId" })
goodsDeliveryScheduleId: number;




}