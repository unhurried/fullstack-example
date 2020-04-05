import { Module } from '@nestjs/common';
import { AuthController } from 'src/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    JwtModule.register({
      // TODO: Externalize secret key for JWT.
      secret: 'dummy',
      signOptions: { expiresIn: '60m' },
    }),
    UserModule,
  ],
  providers: [JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
