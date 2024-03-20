import "reflect-metadata";
import { container } from "tsyringe";
import { CarController } from "../../controller/Car.controller";
import { createCarControllerMock } from "../__mocks__/units/createCarController.mocks";
import { useTb } from "../utils";
import { Request, Response } from "express";

describe("Unit Test: Create Car Controller", () => {
  const { bodyData, expectedValues } = createCarControllerMock;
  const carControllerCreate = container.resolve(CarController).create;

  let req: Partial<Request> = {};
  let res: Partial<Response> = {};

  beforeEach(async () => {
    await useTb.deleteMany();

    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
  });

  afterAll(async () => {
    await useTb.deleteMany();
  });

  test("Should be able to create a car", async () => {
    req.body = bodyData;

    await carControllerCreate(req as Request, res as Response);

    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(expectedValues);

    expect(res.status).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);
  });
});
