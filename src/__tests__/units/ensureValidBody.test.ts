import { NextFunction, Request, Response } from "express";
import { ensure } from "../../middlewares/Ensure.middleware";
import {
  InvalidBodyMock,
  validBodyMock,
  validSchemaMock,
} from "../__mocks__/units/ensureValidBody.mocks";

describe("Unit Test: Ensure valid body middleware", () => {
  const validBodyMiddleware = ensure.validateBody(validSchemaMock);

  let req: Partial<Request> = {};
  let res: Partial<Response> = {};
  let next: NextFunction = jest.fn();

  beforeEach(() => {
    next = jest.fn()
  })

  test("Should be able to validate a request body.", () => {
    req.body = validBodyMock.bodyData;

    validBodyMiddleware(req as Request, res as Response, next);

    expect(req.body).toStrictEqual(validBodyMock.expectedValue);
    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
  });
  test("Should throw error when validating invalid body", () => {
    req.body = InvalidBodyMock.bodyData;
    expect(() => {
      validBodyMiddleware(req as Request, res as Response, next);
    }).toThrow(InvalidBodyMock.expectedValue);
    expect(next).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(0)
  });
});
