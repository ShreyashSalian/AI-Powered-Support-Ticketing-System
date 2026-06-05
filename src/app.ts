import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import { indexRouter } from "./routes/index.route";

const app = express();

app.use(
  cors({
    methods: "POST,DELETE,PUT,PATCH,GET,HEAD",
    credentials: true,
    origin: process.env.ORIGIN || "*",
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet);

app.use(express.static(path.join(path.resolve(), "public")));
app.use("/images", express.static(path.join(path.resolve(), "public/images")));

app.set("view engine", "hbs");
app.set("views", "/src/views");

app.use(indexRouter);

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ✅ Global Error Handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  },
);

export default app;
