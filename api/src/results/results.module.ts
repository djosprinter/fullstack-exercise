import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResultStatus } from 'src/statuses/statuses.model';
import { ResultsController } from './results.controller';
import { Result } from './results.model';
import { ResultsService } from './results.service';

@Module({
  controllers: [ResultsController],
  providers: [ResultsService],
  imports: [
    SequelizeModule.forFeature([Result, ResultStatus])
  ]
})
export class ResultsModule {}
