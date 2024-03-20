import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma.database";
import { AppError } from "../errors/AppError";
import { AnyZodObject } from "zod";



class EnsureMiddleware {
  public validateBody =
    (schema: AnyZodObject) =>
    (req: Request, _: Response, NextFunction: NextFunction): void => {
      req.body = schema.parse(req.body);
      return NextFunction();
    };
  public idExists = async (
    req: Request,
    _: Response,
    NextFunction: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    if (!id) return NextFunction();

    const foundId = await prisma.car.findUnique({ where: { id } });

    if (!foundId) {
      throw new AppError("Car not found.", 404);
    }

    return NextFunction()
  };
}

export const ensure = new EnsureMiddleware(); 


