import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ResultStatus } from "src/statuses/statuses.model";

@Table({ tableName: 'results', createdAt: false, updatedAt: false })
export class Result extends Model {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: {}, description: 'Статус'})
    @BelongsTo(() => ResultStatus)
    status: ResultStatus;

    @ApiProperty({example: '1', description: 'Статус'})
    @ForeignKey(() => ResultStatus)
    @Column({type: DataType.INTEGER})
    statusId: number;

    @ApiProperty({example: 'repositoryName', description: 'Имя репозитория'})
    @Column({type: DataType.STRING, allowNull: false})
    repositoryName: string;

    @ApiProperty({example: [], description: 'Полученные данные'})
    @Column({type: DataType.JSONB})
    findings: object[];

    @ApiProperty({example: new Date(), description: 'queuedAt'})
    @Column({type: DataType.DATE})
    queuedAt: Date;

    @ApiProperty({example: new Date(), description: 'scanningAt'})
    @Column({type: DataType.DATE})
    scanningAt: Date;

    @ApiProperty({example: new Date(), description: 'finishedAt'})
    @Column({type: DataType.DATE})
    finishedAt: Date;
}