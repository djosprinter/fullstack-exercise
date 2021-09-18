import { ApiProperty } from "@nestjs/swagger";

export class CreateResultDto {
    @ApiProperty({example: '1', description: 'ID Статуса'})
    readonly statusId: number;

    @ApiProperty({example: 'repositoryName', description: 'Имя репозитория'})
    readonly repositoryName: string;
    
    @ApiProperty({example: [], description: 'Полученные данные'})
    readonly findings: object[];
}