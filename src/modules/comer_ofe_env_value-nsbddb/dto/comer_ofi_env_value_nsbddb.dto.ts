import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNumber, IsNumberString, IsOptional, IsString, Max, Min } from "class-validator";

export class comerOfiEnvValueNsbddbDto { 

/*
@IsInt({ message: "officeID debe ser un numero entero" })
@Min(0, { message: "El minimo valor de officeID debe ser 0" })
//@Max(0, { message: "El maximo valor de officeID debe ser 0" })
@IsOptional()
@ApiProperty({ example: "officeID" })
officeID: number;*/

/*
@IsInt({ message: "programmingId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de programmingId debe ser 0" })
//@Max(0, { message: "El maximo valor de programmingId debe ser 0" })
@IsOptional()
@ApiProperty({ example: "programmingId" })
programmingId: number;*/


@IsString({ message: "sendingUsr debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "sendingUsr" })
sendingUsr: string;


@IsDate({message:"El formato de fecha de sendingDate debe ser AAAA-MM-DD"})
@IsOptional()
@ApiProperty({ example: "sendingDate" })
sendingDate: Date;


@IsString({ message: "statusOf debe ser una cadena " })
@IsOptional()
@ApiProperty({ example: "statusOf" })
statusOf: string;


}