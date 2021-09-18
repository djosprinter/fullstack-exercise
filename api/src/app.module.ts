import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Result } from './results/results.model';
import { ResultsModule } from './results/results.module';
import { ResultStatus } from './statuses/statuses.model';
import { StatusesModule } from './statuses/statuses.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
   }),
   SequelizeModule.forRoot({
       dialect: 'postgres',
       host: process.env.POSTGRES_HOST,
       port: Number(process.env.POSTGRESS_PORT),
       username: process.env.POSTGRES_USER,
       password: process.env.POSTGRESS_PASSWORD,
       database: process.env.POSTGRES_DB,
       models: [Result, ResultStatus],
      //  autoLoadModels: true
   }),
   ResultsModule,
   StatusesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
