import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwksRsa from 'jwks-rsa';
import { JwtToken } from './resource/jwt-token';
import { AuthenticatedUser } from './resource/authenticated-user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        // TODO Externalize the urls.
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, // Verify exp claim
            issuer: 'http://localhost:3002', // Verify iss claim
            audience: 'todo-api', // Verify aud claim
            // secretOrKey: 'secret', // Replace secretOrKeyProvider with this line to specify a opaque secret.
            secretOrKeyProvider: jwksRsa.passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `http://localhost:3002/jwks`
            }),
        })
    }

    async validate(payload: JwtToken): Promise<AuthenticatedUser> {
        // Verify scope claim
        if(!payload.scope || !payload.scope.split(' ').includes('todo')) {
            throw new UnauthorizedException('scope must include "todo".');
        }

        return { userId: payload.sub };
    }
}
