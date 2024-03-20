import {
  carMock,
  invalidBody1,
  invalidBody2,
  partialCar,
} from "../../__mocks__/car.mocks";
import { baseURL, request, useTb } from "../../utils";

describe("Integration Tests: Create Car Route.", () => {
  //setup

  beforeEach(async () => {
    await useTb.deleteMany();
  });

  afterAll(async () => {
    await useTb.deleteMany();
  });

  test("Should be able to insert a car informations.", async () => {
    const response = await request.post(baseURL).send(carMock);

    const expectValues = {
      id: expect.any(String),
      name: carMock.name,
      description: carMock.description,
      brand: carMock.brand,
      year: carMock.year,
      km: carMock.km,
    };
  
    expect(response.body).toStrictEqual(expectValues);
    expect(response.status).toBe(201);
  });

  test("Should be able to insert a car informations without description.", async () => {
    const response = await request.post(baseURL).send(partialCar);

    const expectValues = {
      id: expect.any(String),
      name: partialCar.name,
      description: null,
      brand: partialCar.brand,
      year: partialCar.year,
      km: partialCar.km,
    };
    console.log(response.body);
    expect(response.body).toStrictEqual(expectValues);
    expect(response.status).toBe(201);
  });

  test("Should not be able to insert a car informations - invalid body.", async () => {
    const response = await request.post(baseURL).send(invalidBody1);

    const expectValues = {
      message: [
        {
          code: "invalid_type",
          expected: "string",
          message: "Required",
          path: ["name"],
          received: "undefined",
        },
        {
          code: "invalid_type",
          expected: "string",
          message: "Required",
          path: ["brand"],
          received: "undefined",
        },
        {
          code: "invalid_type",
          expected: "number",
          message: "Required",
          path: ["year"],
          received: "undefined",
        },
        {
          code: "invalid_type",
          expected: "number",
          message: "Required",
          path: ["km"],
          received: "undefined",
        },
      ],
    };

    expect(response.body).toStrictEqual(expectValues);
    expect(response.status).toBe(400);
  });

  test("Should not be able to insert a car informations - Invalid data Types.", async () => {
    const response = await request.post(baseURL).send(invalidBody2);

    const expectValues = {
      message: [
        {
          code: "invalid_type",
          expected: "string",
          message: "Expected string, received number",
          path: ["name"],
          received: "number",
        },
        {
          code: "invalid_type",
          expected: "string",
          message: "Expected string, received number",
          path: ["description"],
          received: "number",
        },
        {
          code: "invalid_type",
          expected: "string",
          message: "Expected string, received number",
          path: ["brand"],
          received: "number",
        },
        {
          code: "invalid_type",
          expected: "number",
          message: "Expected number, received string",
          path: ["year"],
          received: "string",
        },
        {
          code: "invalid_type",
          expected: "number",
          message: "Expected number, received string",
          path: ["km"],
          received: "string",
        },
      ],
    };

    expect(response.body).toStrictEqual(expectValues);
    expect(response.status).toBe(400);
  });
});
