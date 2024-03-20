import { response } from "express";
import { carMock } from "../__mocks__/car.mocks";
import { retrieveService, useTb } from "../utils";

describe("Unit Test: retrive Car Service", () => {
  let carId: string;
  beforeEach(async () => {
    await useTb.deleteMany();

    const car = await useTb.create({ data: carMock });

    carId = car.id;
  });

  afterAll(async () => {
    await useTb.deleteMany();
  });


  test("Should retrieve car details by ID", async () => {
    const retrievedCar = await retrieveService(carId);

    const expectValues = {
      id: carId,
      name: carMock.name,
      description: carMock.description,
      brand: carMock.brand,
      year: carMock.year,
      km: carMock.km,
    };

  

    expect(retrievedCar).toEqual(expectValues);
  });

  test("Should not be  able to retrieve car with invalid ID.", async () => {
    const invalidCarId: string = "id_invalido";

    expect(async () => {
      await retrieveService(invalidCarId);
    }).rejects.toThrow(response.statusMessage);
  });
});
