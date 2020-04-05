import { Request } from 'express';
import { AuthenticatedUser } from './authenticated-user';

export interface AuthenticatedRequest extends Request {
  user: AuthenticatedUser;
}
