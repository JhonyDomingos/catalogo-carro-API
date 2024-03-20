
import { carMock } from "../__mocks__/car.mocks";
import { carPartialUpdateService, useTb } from "../utils";
import { partialUpdateCarServiceMock } from "../__mocks__/units/updateCarService.mock";

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

  test("Should be able to partially update a car", async () => {
    const { expectedValues, bodyData } = partialUpdateCarServiceMock;
    const received = await carPartialUpdateService(carId, bodyData);

    expect(received).toStrictEqual(expectedValues);
  });
});
