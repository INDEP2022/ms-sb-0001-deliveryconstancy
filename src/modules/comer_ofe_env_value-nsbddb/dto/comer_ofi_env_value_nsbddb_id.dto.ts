import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNumber, IsNumberString, IsOptional, IsString, Max, Min } from "class-validator";

export class comerOfiEnvValueNsbddbIdDto { 


@IsInt({ message: "officeID debe ser un numero entero" })
@Min(0, { message: "El minimo valor de officeID debe ser 0" })
//@Max(0, { message: "El maximo valor de officeID debe ser 0" })
@IsOptional()
@ApiProperty({ example: "officeID" })
officeID: number;



}