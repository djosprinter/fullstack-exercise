import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { ResultStatus } from './statuses.model';

@Injectable()
export class StatusesService {
    constructor(@InjectModel(ResultStatus) private statusRepository: typeof ResultStatus) {}

    async getAllStatuses() {
        const statuses = await this.statusRepository.findAll({include: {all: true}});
        return statuses;
    }
    
    async createStatus(createStatusDto: CreateStatusDto) {
        const status = await this.statusRepository.create(createStatusDto);
        return status;
    }
}
