import { Request } from 'express';
import { UserModel } from '../mvc/models/user.model'; // Adjust the path if necessary

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserModel;
  }
}
