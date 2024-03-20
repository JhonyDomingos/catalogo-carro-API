import { carCreateService, useTb } from "../utils";
import {
  createCarSericeMock,
  createCarSericeMockPartial,
} from "../__mocks__/units/createCarService.mocks";

describe("Unit Test: Create Car Service", () => {
  const { bodyData, expectedValues } = createCarSericeMock;

  beforeEach(async () => {
    await useTb.deleteMany();
  });

  afterAll(async () => {
    await useTb.deleteMany();
  });

  test("Should be able to create a car - Full body", async () => {
    const recived = await carCreateService(bodyData);

    expect(recived).toStrictEqual(expectedValues);
  });
  test("Should be able to create a car - Without Description", async () => {
    const { bodyData, expectedValues } = createCarSericeMockPartial;
    const recived = await carCreateService(bodyData);

    expect(recived).toStrictEqual(expectedValues);
  });
});
