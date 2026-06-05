import { Types } from "mongoose";

interface UserDetail {
  userId: Types.ObjectId;
  email: string;
  permission: string[];
  accessToken: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserDetail;
    }
  }
}
