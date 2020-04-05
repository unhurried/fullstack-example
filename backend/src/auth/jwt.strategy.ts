import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtToken } from './resource/jwt-token';
import { AuthenticatedUser } from './resource/authenticated-user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // TODO: Externalize secret key for JWT.
            secretOrKey: 'dummy',
        })
    }

    async validate(payload: JwtToken): Promise<AuthenticatedUser> {
        return { userId: payload.sub, username: payload.username };
    }
}