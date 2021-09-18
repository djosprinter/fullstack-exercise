import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Result } from 'src/results/results.model';
import { ResultStatus } from './statuses.model';

@Module({
  providers: [StatusesService],
  controllers: [StatusesController],
  imports: [
    SequelizeModule.forFeature([Result, ResultStatus])
  ]
})
export class StatusesModule {}
