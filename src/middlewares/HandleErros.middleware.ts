import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ZodError } from "zod";

class HandleError {
  public static execute = (
    error: unknown,
    _: Request,
    res: Response,
    __: NextFunction
  ) => {
    if (error instanceof AppError) {
      return res.status(error.status).json({ message: error.message });
    }
    if(error instanceof ZodError) {
        return res.status(400).json({message: error.errors})
    }

    console.log(error)

    return res.status(500).json({message: "Internal Server Error "})
  };
}

export const handleError = HandleError.execute
