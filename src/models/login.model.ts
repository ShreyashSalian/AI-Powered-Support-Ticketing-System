import mongoose, { Types, Document, Schema } from "mongoose";

interface loginDocument extends Document {
  userId: Types.ObjectId;
  email: string;
  deviceId: string;
  userAgent: string;
  ipAddress: string;
  accessToken: string;
  refreshToken: string;
  permission: string[];
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

const loginSchema = new Schema<loginDocument>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    deviceId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
    ipAddress: {
      type: String,
      required: true,
    },
    permission: {
      type: [String],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const LoginModel = mongoose.model<loginDocument>("Login", loginSchema);
