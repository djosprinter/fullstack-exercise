import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from 'src/shared/enum/status';
import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './results.model';

@Injectable()
export class ResultsService {
    constructor(@InjectModel(Result) private resultRepository: typeof Result) { }

    async getAllResults() {
        const results = await this.resultRepository.findAll({ include: { all: true } });
        return results;
    }

    async createResult(createResultDto: CreateResultDto) {
        let dateProperty;

        switch (createResultDto.statusId) {
            case Status.queued:
                dateProperty = 'queuedAt';
                break;
            case Status.in_progress:
                dateProperty = 'scanningAt';
                break;
            case Status.success:
                dateProperty = 'finishedAt';
                break;
        }
        
        const result = await this.resultRepository.create({ ...createResultDto, [dateProperty]: new Date() });
        return result;
    }
}
