import express from "express";
import { CONSTANT_LIST } from "../contants/global.constants";

export const indexRouter = express.Router();

indexRouter.get("/api/v1", (req: express.Request, res: express.Response) => {
  res.status(CONSTANT_LIST.STATUS_CODE_OK).json({
    status: CONSTANT_LIST.STATUS_SUCCESS,
    statusCode: CONSTANT_LIST.STATUS_CODE_OK,
    successMessage: "The server is running properly.",
    errorMessage: null,
    data: null,
  });
});
