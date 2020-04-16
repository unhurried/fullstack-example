import { ApiProperty } from '@nestjs/swagger';

export class TokenReponse {
  @ApiProperty({
    description: 'Access Token',
  })
  accessToken: string;
}
