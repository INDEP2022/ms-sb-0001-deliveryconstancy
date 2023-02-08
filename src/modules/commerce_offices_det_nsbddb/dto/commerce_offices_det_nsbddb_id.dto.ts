import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNumber, IsNumberString, IsOptional, IsString, Max, Min } from "class-validator";

export class commerceOfficesDetNsbddbIdDto { 


@IsInt({ message: "officeID debe ser un numero entero" })
@Min(0, { message: "El minimo valor de officeID debe ser 0" })
//@Max(0, { message: "El maximo valor de officeID debe ser 0" })
@ApiProperty({ example: "officeID" })
officeID: number;


@IsInt({ message: "goodNum debe ser un numero entero" })
@Min(0, { message: "El minimo valor de goodNum debe ser 0" })
//@Max(0, { message: "El maximo valor de goodNum debe ser 0" })
@ApiProperty({ example: "goodNum" })
goodNum: number;


@IsInt({ message: "programmingId debe ser un numero entero" })
@Min(0, { message: "El minimo valor de programmingId debe ser 0" })
//@Max(0, { message: "El maximo valor de programmingId debe ser 0" })
@ApiProperty({ example: "programmingId" })
programmingId: number;





}