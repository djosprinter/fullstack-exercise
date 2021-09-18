import { ApiProperty } from "@nestjs/swagger";
import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({tableName: 'result_statuses', createdAt: false, updatedAt: false})
export class ResultStatus extends Model {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Queued', description: 'Статус'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;
}