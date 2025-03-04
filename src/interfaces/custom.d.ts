import { Request } from 'express';
import { UserModel } from '../mvc/models/user.model'; // Adjust the path as needed

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserModel;
  }
}
