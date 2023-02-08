import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNumber, IsNumberString, IsOptional, IsString, Max, Min } from "class-validator";

export class certificatesDonationDto { 


@IsInt({ message: "certificateId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de certificateId debe ser 0" })
//@Max(0, { message: "El maximo valor de certificateId debe ser 0" })
@IsOptional()
@ApiProperty({ example: "certificateId" })
certificateId: number;


@IsInt({ message: "progDeliveryId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de progDeliveryId debe ser 0" })
//@Max(0, { message: "El maximo valor de progDeliveryId debe ser 0" })
@IsOptional()
@ApiProperty({ example: "progDeliveryId" })
progDeliveryId: number;


@IsString({ message: "creationUser debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "creationUser" })
creationUser: string;


@IsString({ message: "userModification debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "userModification" })
userModification: string;


@IsDate({message:"El formato de fecha de CreationDate debe ser AAAA-MM-DD"})
@IsOptional()
@ApiProperty({ example: "CreationDate" })
CreationDate: Date;


@IsDate({message:"El formato de fecha de dateModification debe ser AAAA-MM-DD"})
@IsOptional()
@ApiProperty({ example: "dateModification" })
dateModification: Date;


@IsString({ message: "witnessName1 debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "witnessName1" })
witnessName1: string;


@IsString({ message: "witnessName2 debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "witnessName2" })
witnessName2: string;


@IsString({ message: "transport debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "transport" })
transport: string;


@IsString({ message: "marck debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "marck" })
marck: string;


@IsString({ message: "model debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "model" })
model: string;


@IsString({ message: "color debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "color" })
color: string;


@IsString({ message: "serie debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "serie" })
serie: string;


@IsString({ message: "plates debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "plates" })
plates: string;


@IsString({ message: "driverName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "driverName" })
driverName: string;


@IsString({ message: "folioScale debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "folioScale" })
folioScale: string;


@IsInt({ message: "scaleTotalWeight debe ser un numero entero" })
@Min(0, { message: "El minimo valor de scaleTotalWeight debe ser 0" })
//@Max(0, { message: "El maximo valor de scaleTotalWeight debe ser 0" })
@IsOptional()
@ApiProperty({ example: "scaleTotalWeight" })
scaleTotalWeight: number;


@IsInt({ message: "receivedWeight debe ser un numero entero" })
@Min(0, { message: "El minimo valor de receivedWeight debe ser 0" })
//@Max(0, { message: "El maximo valor de receivedWeight debe ser 0" })
@IsOptional()
@ApiProperty({ example: "receivedWeight" })
receivedWeight: number;


@IsString({ message: "granteeName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "granteeName" })
granteeName: string;


@IsString({ message: "granteePosition debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "granteePosition" })
granteePosition: string;


@IsString({ message: "descTransport debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "descTransport" })
descTransport: string;


@IsString({ message: "designationName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "designationName" })
designationName: string;


@IsString({ message: "positionDesignation debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "positionDesignation" })
positionDesignation: string;


@IsString({ message: "receiveDonation debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "receiveDonation" })
receiveDonation: string;


}