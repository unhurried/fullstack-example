import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Error {
  @ApiPropertyOptional({
    description: 'Error code',
    readOnly: true,
    example: 'invalid_resource_id'
  })
  code: string;

  @ApiProperty({
    description: 'Error message',
    readOnly: true,
    example: 'Resource you requested does not exist.'
  })
  message?: string;
}
