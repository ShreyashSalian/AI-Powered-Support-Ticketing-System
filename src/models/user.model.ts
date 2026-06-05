import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose, { Types, Document, Schema } from "mongoose";

enum USER_ROLE {
  AGENT = "AGENT",
  CUSTOMER = "CUSTOMER",
  ADMIN = "ADMIN",
}

interface userDocument extends Document {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  contactNumber: string;
  lockUntil?: Date | null;
  failedLoginAttempts: number;
  isDeleted: boolean;
  permission: string[];
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}

/**
 ==============================================================
 USER SCHEMA
 ==============================================================
 */

const userSchema = new Schema<userDocument>(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: Object.values(USER_ROLE),
      default: USER_ROLE.CUSTOMER,
    },
    permission: {
      type: [String],
      default: [],
    },
    failedLoginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: {
      type: Date,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  const user = this as userDocument;
  if (!user.isModified("password")) {
    return next;
  }
  try {
    user.password = await bcrypt.hash(user.password, 12);
  } catch (err: any) {
    throw new Error(err);
  }
});

userSchema.methods.comparePassword = async function (
  password: string,
): Promise<Boolean> {
  const user = this as userDocument;
  return bcrypt.compare(password, user.password);
};

userSchema.methods.generateAccessToken = function (): string {
  const user = this as userDocument;
  const token = process.env.ACCESS_TOKEN;
  if (!token) {
    throw new Error("Please enter access token");
  }
  return jwt.sign(
    {
      userId: user?._id,
      email: user?.email,
      permssion: user?.permission,
      firstName: user?.firstName,
    },
    token,
    {
      expiresIn: "5h",
    },
  );
};

userSchema.methods.generateRefreshToken = function (): string {
  const user = this as userDocument;
  const token = process.env.REFRESH_TOKEN;
  if (!token) {
    throw new Error("No token provided");
  }
  return jwt.sign(
    {
      userId: user?._id,
      email: user?.email,
      permission: user?.permission,
      firstName: user?.firstName,
    },
    token,
    {
      expiresIn: "10d",
    },
  );
};

export const UserModel = mongoose.model<userDocument>("User", userSchema);
