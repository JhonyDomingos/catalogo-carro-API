import { Car } from "@prisma/client";
import { carMock, partialCar } from "../../__mocks__/car.mocks";
import { baseURL, request, useTb } from "../../utils";

describe("Integration Tests: Read Cars Route", () => {
  let car: Car;

  beforeAll(async () => {
    await useTb.deleteMany();
    car = await useTb.create({ data: carMock });
    car = await useTb.create({ data: partialCar });
  });

  afterAll(async () => {
    await useTb.deleteMany();
  });

  test("Should be able to read All Car Informations", async () => {
    const response = await request.get(baseURL);

    const expectValues = [
      {
        id: expect.any(String),
        name: carMock.name,
        description: carMock.description,
        brand: carMock.brand,
        year: carMock.year,
        km: carMock.km,
      },
      {
        id: expect.any(String),
        name: partialCar.name,
        description: null,
        brand: partialCar.brand,
        year: partialCar.year,
        km: partialCar.km,
      },
    ];

    expect(response.body).toHaveLength(2);
    expect(response.body).toStrictEqual(expectValues);
    expect(response.status).toEqual(200);
  });
});
