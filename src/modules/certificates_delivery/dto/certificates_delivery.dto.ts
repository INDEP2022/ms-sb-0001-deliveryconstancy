import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNumber, IsNumberString, IsOptional, IsString, Max, Min } from "class-validator";

export class certificatesDeliveryDto { 

 
@IsInt({ message: "certificateId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de certificateId debe ser 0" })
//@Max(0, { message: "El maximo valor de certificateId debe ser 0" })
@IsOptional()
@ApiProperty({ example: "certificateId" })
certificateId: number;


@IsInt({ message: "deliveryScheduleId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de deliveryScheduleId debe ser 0" })
//@Max(0, { message: "El maximo valor de deliveryScheduleId debe ser 0" })
@IsOptional()
@ApiProperty({ example: "deliveryScheduleId" })
deliveryScheduleId: number;


@IsInt({ message: "certificateType debe ser un numero entero" })
@Min(0, { message: "El minimo valor de certificateType debe ser 0" })
//@Max(0, { message: "El maximo valor de certificateType debe ser 0" })
@IsOptional()
@ApiProperty({ example: "certificateType" })
certificateType: number;


@IsInt({ message: "clientIden debe ser un numero entero" })
@Min(0, { message: "El minimo valor de clientIden debe ser 0" })
//@Max(0, { message: "El maximo valor de clientIden debe ser 0" })
@IsOptional()
@ApiProperty({ example: "clientIden" })
clientIden: number;


@IsString({ message: "clientIdennNum debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "clientIdennNum" })
clientIdennNum: string;


@IsString({ message: "procClientIdennNum debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "procClientIdennNum" })
procClientIdennNum: string;


@IsString({ message: "repLegal debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "repLegal" })
repLegal: string;


@IsInt({ message: "repLegalIden debe ser un numero entero" })
@Min(0, { message: "El minimo valor de repLegalIden debe ser 0" })
//@Max(0, { message: "El maximo valor de repLegalIden debe ser 0" })
@IsOptional()
@ApiProperty({ example: "repLegalIden" })
repLegalIden: number;


@IsString({ message: "repLegalIdenNum debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "repLegalIdenNum" })
repLegalIdenNum: string;


@IsString({ message: "repLegalIdenProg debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "repLegalIdenProg" })
repLegalIdenProg: string;


@IsString({ message: "repLegalPosition debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "repLegalPosition" })
repLegalPosition: string;


@IsString({ message: "virtue debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "virtue" })
virtue: string;


@IsString({ message: "userCreation debe ser una cadena " })
@ApiProperty({ example: "userCreation" })
userCreation: string;


@IsString({ message: "userModification debe ser una cadena " })
@ApiProperty({ example: "userModification" })
userModification: string;


@IsDate({message:"El formato de fecha de creationDate debe ser AAAA-MM-DD"})
@ApiProperty({ example: "creationDate" })
creationDate: Date;


@IsDate({message:"El formato de fecha de modificationDate debe ser AAAA-MM-DD"})
@ApiProperty({ example: "modificationDate" })
modificationDate: Date;


@IsString({ message: "closing debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "closing" })
closing: string;


@IsString({ message: "positionDesignation debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "positionDesignation" })
positionDesignation: string;


@IsString({ message: "positionGrantee debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "positionGrantee" })
positionGrantee: string;


@IsString({ message: "color debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "color" })
color: string;


@IsString({ message: "descTransport debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "descTransport" })
descTransport: string;


@IsDate({message:"El formato de fecha de writedate debe ser AAAA-MM-DD"})
@IsOptional()
@ApiProperty({ example: "writedate" })
writedate: Date;


@IsString({ message: "folioScale debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "folioScale" })
folioScale: string;


@IsString({ message: "marck debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "marck" })
marck: string;


@IsString({ message: "model debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "model" })
model: string;


@IsString({ message: "driverName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "driverName" })
driverName: string;


@IsString({ message: "designeeName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "designeeName" })
designeeName: string;


@IsString({ message: "granteeName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "granteeName" })
granteeName: string;


@IsString({ message: "witnessName1 debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "witnessName1" })
witnessName1: string;


@IsString({ message: "witnessName2 debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "witnessName2" })
witnessName2: string;


@IsString({ message: "receivedWeight debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "receivedWeight" })
receivedWeight: string;


@IsString({ message: "scaleTotalWeight debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "scaleTotalWeight" })
scaleTotalWeight: string;


@IsString({ message: "plates debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "plates" })
plates: string;


@IsString({ message: "receiveDonation debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "receiveDonation" })
receiveDonation: string;


@IsString({ message: "serie debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "serie" })
serie: string;


@IsString({ message: "transport debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "transport" })
transport: string;


@IsInt({ message: "version debe ser un numero entero" })
@Min(0, { message: "El minimo valor de version debe ser 0" })
//@Max(0, { message: "El maximo valor de version debe ser 0" })
@IsOptional()
@ApiProperty({ example: "version" })
version: number;


@IsString({ message: "publicNotary debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "publicNotary" })
publicNotary: string;


@IsString({ message: "publicDeed debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "publicDeed" })
publicDeed: string;


@IsInt({ message: "cveState debe ser un numero entero" })
@Min(0, { message: "El minimo valor de cveState debe ser 0" })
//@Max(0, { message: "El maximo valor de cveState debe ser 0" })
@IsOptional()
@ApiProperty({ example: "cveState" })
cveState: number;


@IsString({ message: "adjudicator debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "adjudicator" })
adjudicator: string;


@IsString({ message: "receiverType debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "receiverType" })
receiverType: string;


@IsString({ message: "deliveryName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "deliveryName" })
deliveryName: string;


@IsString({ message: "postDelivery debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "postDelivery" })
postDelivery: string;


@IsInt({ message: "deliveryIden debe ser un numero entero" })
@Min(0, { message: "El minimo valor de deliveryIden debe ser 0" })
//@Max(0, { message: "El maximo valor de deliveryIden debe ser 0" })
@IsOptional()
@ApiProperty({ example: "deliveryIden" })
deliveryIden: number;


@IsString({ message: "deliveryNum debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "deliveryNum" })
deliveryNum: string;


@IsString({ message: "deliveryProcIden debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "deliveryProcIden" })
deliveryProcIden: string;


@IsDate({message:"El formato de fecha de oficioDate debe ser AAAA-MM-DD"})
@IsOptional()
@ApiProperty({ example: "oficioDate" })
oficioDate: Date;


@IsString({ message: "folio debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "folio" })
folio: string;


@IsString({ message: "authorizeReceive debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "authorizeReceive" })
authorizeReceive: string;


@IsString({ message: "teName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "teName" })
teName: string;


@IsString({ message: "tePosition debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "tePosition" })
tePosition: string;


@IsString({ message: "companyName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "companyName" })
companyName: string;


@IsString({ message: "certifiesPersonality debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "certifiesPersonality" })
certifiesPersonality: string;


@IsString({ message: "oficioNum debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "oficioNum" })
oficioNum: string;


@IsString({ message: "positionCompany debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "positionCompany" })
positionCompany: string;


@IsString({ message: "oicParticipates debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "oicParticipates" })
oicParticipates: string;


@IsString({ message: "oicName debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "oicName" })
oicName: string;


@IsString({ message: "participateCommissioned debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "participateCommissioned" })
participateCommissioned: string;


@IsInt({ message: "reasonsNotAccepted debe ser un numero entero" })
@Min(0, { message: "El minimo valor de reasonsNotAccepted debe ser 0" })
//@Max(0, { message: "El maximo valor de reasonsNotAccepted debe ser 0" })
@IsOptional()
@ApiProperty({ example: "reasonsNotAccepted" })
reasonsNotAccepted: number;


@IsInt({ message: "reasonsNotDelivered debe ser un numero entero" })
@Min(0, { message: "El minimo valor de reasonsNotDelivered debe ser 0" })
//@Max(0, { message: "El maximo valor de reasonsNotDelivered debe ser 0" })
@IsOptional()
@ApiProperty({ example: "reasonsNotDelivered" })
reasonsNotDelivered: number;


@IsInt({ message: "reasonsNotRetired debe ser un numero entero" })
@Min(0, { message: "El minimo valor de reasonsNotRetired debe ser 0" })
//@Max(0, { message: "El maximo valor de reasonsNotRetired debe ser 0" })
@IsOptional()
@ApiProperty({ example: "reasonsNotRetired" })
reasonsNotRetired: number;


@IsString({ message: "oicCall debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "oicCall" })
oicCall: string;


}