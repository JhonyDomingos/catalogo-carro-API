import {
  readAllCarServiceMock,
  recivedValues,
} from "../__mocks__/units/readAllCarService.mocks";
import { carReadAllService, useTb } from "../utils";

describe("Unit Test: ReadAll Car Route", () => {
  const { recivedMock } = recivedValues;

  beforeEach(async () => {
    await useTb.deleteMany();

    await useTb.createMany({ data: recivedMock });
  });

  afterAll(async () => {
    await useTb.deleteMany();
  });
  test("Should be able to read all cars", async () => {
    const received = await carReadAllService;
    const expectedValues = [
      {
        id: expect.any(String),
        name: "Fiesta",
        description: "A popular car",
        brand: "Ford",
        year: 2022,
        km: 5000,
      },
      {
        id: expect.any(String),
        name: "Civic",
        description: "A reliable car",
        brand: "Honda",
        year: 2020,
        km: 8000,
      },
    ];

    expect(received).toStrictEqual(expectedValues);
    expect(received).toHaveLength(2);
  });
});
