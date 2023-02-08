import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNumber, IsNumberString, IsOptional, IsString, Max, Min } from "class-validator";

export class certificatesGoodsDto { 

 
@IsInt({ message: "certificateId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de certificateId debe ser 0" })
//@Max(0, { message: "El maximo valor de certificateId debe ser 0" })

@ApiProperty({ example: "certificateId" })
certificateId: number;


@IsInt({ message: "goodId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de goodId debe ser 0" })
//@Max(0, { message: "El maximo valor de goodId debe ser 0" })
@IsOptional()
@ApiProperty({ example: "goodId" })
goodId: number;


@IsInt({ message: "quantity debe ser un numero entero" })
@Min(0, { message: "El minimo valor de quantity debe ser 0" })
//@Max(0, { message: "El maximo valor de quantity debe ser 0" })
@IsOptional()
@ApiProperty({ example: "quantity" })
quantity: number;


@IsString({ message: "userCreation debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "userCreation" })
userCreation: string;


@IsString({ message: "userModification debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "userModification" })
userModification: string;


@IsDate({message:"El formato de fecha de creationDate debe ser AAAA-MM-DD"})
@IsOptional()
@ApiProperty({ example: "creationDate" })
creationDate: Date;


@IsDate({message:"El formato de fecha de modificationDate debe ser AAAA-MM-DD"})
@IsOptional()
@ApiProperty({ example: "modificationDate" })
modificationDate: Date;


@IsInt({ message: "version debe ser un numero entero" })
@Min(0, { message: "El minimo valor de version debe ser 0" })
//@Max(0, { message: "El maximo valor de version debe ser 0" })
@IsOptional()
@ApiProperty({ example: "version" })
version: number;


@IsInt({ message: "transactionId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de transactionId debe ser 0" })
//@Max(0, { message: "El maximo valor de transactionId debe ser 0" })
@ApiProperty({ example: "transactionId" })
transactionId: number;


@IsInt({ message: "siabGoodNum debe ser un numero entero" })
@Min(0, { message: "El minimo valor de siabGoodNum debe ser 0" })
//@Max(0, { message: "El maximo valor de siabGoodNum debe ser 0" })
@IsOptional()
@ApiProperty({ example: "siabGoodNum" })
siabGoodNum: number;


@IsInt({ message: "goodsDeliveryScheduleId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de goodsDeliveryScheduleId debe ser 0" })
//@Max(0, { message: "El maximo valor de goodsDeliveryScheduleId debe ser 0" })
@ApiProperty({ example: "goodsDeliveryScheduleId" })
goodsDeliveryScheduleId: number;


}