import { baseURL, request, useTb } from "../../utils";
import { carMock } from "../../__mocks__/car.mocks";

describe("Integration Tests: Retrieve Car Route", () => {
  let carId: string;

  beforeEach(async () => {
    await useTb.deleteMany();
    const car = await useTb.create({ data: carMock });
    carId = car.id;
  });

  afterAll(async () => {
    await useTb.deleteMany();
  });

  test("Should be able to retrieve car.", async () => {
    const response = await request.get(`${baseURL}/${carId}`);

    const expectValues = {
      id: carId,
      name: carMock.name,
      description: carMock.description,
      brand: carMock.brand,
      year: carMock.year,
      km: carMock.km,
    };

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(expectValues);
  });

  test("Should not be  able to retrieve car with invalid ID.", async () => {
    const invalidCarId = "id_invalido";

    const response = await request.get(`${baseURL}/${invalidCarId}`);

    expect(response.status).toBe(404);
  });


});
