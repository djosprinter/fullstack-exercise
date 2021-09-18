import { ApiProperty } from "@nestjs/swagger";

export class CreateStatusDto {
    @ApiProperty({example: 'Queued', description: 'Статус'})
    readonly value: string;
}
