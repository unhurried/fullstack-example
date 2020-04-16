import { Body, Controller,  HttpCode, Post, UnauthorizedException } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './resource/user';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { TokenReponse as TokenResponse } from './resource/token-response';
import { JwtToken } from './resource/jwt-token';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  @ApiOperation({ summary: 'Get an access token' })
  @ApiOkResponse({ description: 'Success', type: TokenResponse })
  @HttpCode(200)
  @Post('/login')
  login(@Body() requestBody: User): TokenResponse {
    const user = this.userService.authenticate(requestBody.username, requestBody.password);
    if (!user) throw new UnauthorizedException();
    const jwtToken: JwtToken = {
      sub: user.userId,
      username: user.username,
    };
    const response: TokenResponse = {
      accessToken: this.jwtService.sign(jwtToken),
    };
    return response;
  }
}
