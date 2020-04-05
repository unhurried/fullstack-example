import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

export class User {
  @ApiProperty({
    description: 'Username',
    example: 'johnsmith',
    minLength: 8,
    maxLength: 64,
  })
  @MinLength(8)
  @MaxLength(64)
  username: string;

  @ApiProperty({
    description: 'Password',
    example: 'password123',
    minLength: 8,
    maxLength: 64,
  })
  @MinLength(8)
  @MaxLength(64)
  password: string;
}
