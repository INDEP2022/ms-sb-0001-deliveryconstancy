import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Message } from "src/shared/utils/message.decorator";

export class QueryGoodTrackerDto {
    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({
        title: 'vc_pantalla',
        example: 'Dato de tipo String',
        required: false,
    })
    vcScreen: string;
    @Type(() => String)
    @IsOptional()
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({
        title: ':BLK_ACT_ID.TIPO_ACTA',
        example: 'Dato de tipo String',
        required: false,
    })
    typeMinutes: string;
    @Type(() => Number)
    @IsOptional()
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({
        title: 'global.rel_bienes',
        example: 'Dato de tipo numerico',
        required: false,
    })
    relGood: number;
}