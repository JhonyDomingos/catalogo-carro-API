
import { carMock } from "../../__mocks__/car.mocks";
import { baseURL, useTb , request} from "../../utils";

describe("Integration Tests: Delete Car Route.", () => {
  let carId: string;
  beforeEach(async () => {
    await useTb.deleteMany();
    const car = await useTb.create({ data: carMock });
    carId = car.id;
  });

  afterAll(async () => {
    await useTb.deleteMany();
  });

  test("Should be able to Update a car informations.", async () => {
    const response = await request.delete(`${baseURL}/${carId}`).send();
    expect(response.status).toBe(204);
  });

  test("Should not be  able to Delete car with invalid ID.", async () => {
    const invalidCarId = "id_invalido";

    const response = await request.patch(`${baseURL}/${invalidCarId}`);

    expect(response.status).toBe(404);
  });
});
