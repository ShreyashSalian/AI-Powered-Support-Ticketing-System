import express from "express";
import crypto from "crypto";

/**
 ======================================================================================
 ASYNC HANDLER FUNCTION
 ======================================================================================
 */
export function asyncHandler<
  P = {},
  ResBody = any,
  ReqBody = any,
  ReqQuery = any,
>(
  fn: (
    req: express.Request<P, ResBody, ReqBody, ReqQuery>,
    res: express.Response<ResBody>,
    next: express.NextFunction,
  ) => Promise<any>,
) {
  return (
    req: express.Request<P, ResBody, ReqBody, ReqQuery>,
    res: express.Response<ResBody>,
    next: express.NextFunction,
  ) => Promise.resolve(fn(req, res, next)).catch(next);
}

export const sendSuccess = (
  res: express.Response,
  status: number,
  statusCode: number,
  successMessage: string,
  data: any,
) => {
  return res.status(statusCode).json({
    status,
    statusCode,
    successMessage,
    errorMessage: null,
    data,
  });
};

export const sendError = (
  res: express.Response,
  status: number,
  statusCode: number,
  errorMessage: string,
) => {
  return res.status(statusCode).json({
    status,
    statusCode,
    successMessage: null,
    errorMessage,
    data: null,
  });
};

export const rolePermission = {
  admin: ["create", "read", "update", "delete"],
  customer: ["read"],
  agent: ["read", "update"],
};
