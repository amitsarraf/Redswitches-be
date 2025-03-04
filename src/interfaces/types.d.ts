// types/express/index.d.ts

import { UserModel } from '../mvc/models/user.model'; // Import your user model or interface

declare global {
  namespace Express {
    interface Request {
      user?: UserModel; // Define the user property based on your user schema
    }
  }
}
