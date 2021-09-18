import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './results.model';
import { ResultsService } from './results.service';

@ApiTags('Результаты сканирования')
@Controller('results')
export class ResultsController {
    constructor(private resultsService: ResultsService) {}

    @ApiOperation({summary: 'Получить все результаты'})
    @ApiResponse({status: 200, type: [Result]})
    @Get()
    getAll() {
        return this.resultsService.getAllResults();
    }

    @Post()
    create(@Body() createResultDto: CreateResultDto) {
        // console.log(createResultDto)
        return this.resultsService.createResult(createResultDto);
    }
}
