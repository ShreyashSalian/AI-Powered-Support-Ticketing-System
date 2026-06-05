import mongoose, { Types, Document, Schema } from "mongoose";

interface commentDocument extends Document {
  ticketId: Types.ObjectId;
  userId: Types.ObjectId;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<commentDocument>(
  {
    ticketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const CommentModel = mongoose.model<commentDocument>(
  "Comment",
  commentSchema,
);
