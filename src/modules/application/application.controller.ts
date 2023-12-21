import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApplicationService } from './application.service';
import { QueryGoodTrackerDto } from './dto/query-good-tracker.dto';
import { QueryApplicationDto } from './dto/query-application.dto';

@Controller('application')
export class ApplicationController {
    constructor(private service: ApplicationService) { }

    @ApiOperation({ summary: 'FACTCONST_0001 query' })
    @Post('query-good-tracker')
    async queryGoodTracker(@Body() dto: QueryGoodTrackerDto) {
        return this.service.queryGoodTracker(dto);
    }

    @ApiOperation({ summary: 'FACTCONST_0001 query' })
    @Post('query-application')
    async queryApplication(@Body() dto: QueryApplicationDto) {
        return this.service.queryApplication(dto);
    }
}
