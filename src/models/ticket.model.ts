import mongoose, { Types, Document, Schema } from "mongoose";

interface ticketDocument extends Document {
  title: string;
  description: string;
  createdBy: Types.ObjectId;
  assignedTo: Types.ObjectId;
  status: string;
  priority: string;
  aiCategory: string;
  aiSummary: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum TicketStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

export enum TicketPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

const ticketSchema = new Schema<ticketDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(TicketStatus),
      default: TicketStatus.OPEN,
    },
    priority: {
      type: String,
      enum: Object.values(TicketPriority),
      default: TicketPriority.MEDIUM,
    },
    aiCategory: {
      type: String,
      requird: true,
    },
    aiSummary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const TicketModel = mongoose.model<ticketDocument>(
  "Ticket",
  ticketSchema,
);
