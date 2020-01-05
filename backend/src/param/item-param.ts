import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class ItemParam {
  @ApiProperty({
    description: 'Resource ID',
    example: 1,
  })
  id: string;
}
