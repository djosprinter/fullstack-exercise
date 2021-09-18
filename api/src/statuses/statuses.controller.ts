import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateStatusDto } from './dto/create-status.dto';
import { ResultStatus } from './statuses.model';
import { StatusesService } from './statuses.service';

@ApiTags('Статусы')
@Controller('statuses')
export class StatusesController {
    constructor(private statusesService: StatusesService) {}
    
    @ApiOperation({summary: 'Получить все статусы'})
    @ApiResponse({status: 200, type: [ResultStatus]})
    @Get()
    getAll() {
        return this.statusesService.getAllStatuses();
    }

    // @Post()
    // create(@Body() createStatusDto: CreateStatusDto) {
    //     return this.statusesService.createStatus(createStatusDto);
    // }
}
