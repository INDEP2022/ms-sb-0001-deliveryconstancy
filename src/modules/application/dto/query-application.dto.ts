import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Message } from "src/shared/utils/message.decorator";

export class QueryApplicationDto {
    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({
        title: 'USER',
        example: 'Dato de tipo String',
        required: false,
    })
    user: string;
    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({
        title: 'DONAC_SOLICITUD.ID_SOLICITUD',
        example: 'Dato de tipo numerico',
        required: false,
    })
    applicationId: number;
    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({
        title: 'BLK_TOOLBAR.CVE_FORMA',
        example: 'Dato de tipo String',
        required: false,
    })
    formKey: string;
    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({
        title: 'DONAC_SOLICITUD.TIPO_SOLICITUD',
        example: 'Dato de tipo numerico',
        required: false,
    })
    typeApplication: number;
    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({
        title: 'BLK_ACT.NO_ACTA',
        example: 'Dato de tipo numerico',
        required: false,
    })
    minutesNumber: number;
}