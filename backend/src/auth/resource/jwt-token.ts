export class JwtToken {
  jti: string;
  sub: string;
  iat: number;
  exp: number;
  scope: string;
  aud: string;
}
