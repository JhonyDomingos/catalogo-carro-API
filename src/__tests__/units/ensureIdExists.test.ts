import { NextFunction, Request, Response } from "express";
import { carMock } from "../__mocks__/car.mocks";
import { useTb } from "../utils";
import { ensure } from "../../middlewares/Ensure.middleware";

describe("Unit Test: Middleware Id Exists ", () => {
  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  let next: NextFunction = jest.fn();

  beforeEach(async () => {
    next = jest.fn();
    await useTb.deleteMany();
    await useTb.create({ data: carMock });
  });

  afterAll(async () => {
    await useTb.deleteMany();
  });

  test("Should Found database ID ", async () => {
    req.params = { id: "id" };

    useTb.findUnique = jest.fn().mockReturnValue(carMock);

    await ensure.idExists(req as Request, res as Response, next);
    expect(next).toHaveBeenCalled();
  });
  test("Should throw error if database ID does not exist", async () => {
    req.params = { id: "id" };

    useTb.findUnique = jest.fn().mockResolvedValue(null);

    await expect(async () => {
      await ensure.idExists(req as Request, res as Response, next);
    }).rejects.toThrow("Car not found.");
  });
});
